import { ElementRef, NgZone, OnInit, ViewChild, Component, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { } from 'googlemaps';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { Element } from '@angular/compiler';


@Component({
  selector: 'critere-reservation',
  templateUrl: './critere-reservation.component.html',
  styleUrls: ['./critere-reservation.component.css']
})
export class CritereReservationComponent implements OnInit {

  duree:string
  distance:string
  
  adresseDepValid:boolean = false
  adresseArrValid:boolean = false

  @Output() formEventDuree: EventEmitter<string> = new EventEmitter()
  @Output() formEventDistance: EventEmitter<string> = new EventEmitter()
  @Output() formEventDep: EventEmitter<string> = new EventEmitter()
  @Output() formEventArr: EventEmitter<string> = new EventEmitter()

  /*(formEvent)="impactForm($event)"*/
  
  searchControl: FormControl;

  @ViewChild("searchDepart")
  searchElementRefDep: ElementRef;

  @ViewChild("searchArrive")
  searchElementRefArr: ElementRef;

  @ViewChild("dateCovoiturage")
  elementRefDate: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ref:ChangeDetectorRef) {}

  ngOnInit() {
    //set google maps defaults
    //create search FormControl
    this.searchControl = new FormControl();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocompleteDep = new google.maps.places.Autocomplete(this.searchElementRefDep.nativeElement, {
        types: ["address"]
      });
      let autocompleteArr = new google.maps.places.Autocomplete(this.searchElementRefArr.nativeElement, {
        types: ["address"]
      });
    });
  }

  /**Méthode qui va vérifier si les deux adresses rentrée par l'utilisateur sont des adresses reconnue par l'api google */
  verif(){
    // Get geocoder instance
    var geocoder = new google.maps.Geocoder();
    // Geocode the address
    geocoder.geocode({
      'address': this.searchElementRefDep.nativeElement.value
    }, this.callbackValidDep.bind(this));

    geocoder.geocode({
      'address': this.searchElementRefArr.nativeElement.value
    },this.callbackValidArr.bind(this));
  }

  /** Méthode callabck de la première adresse pour savoir si elle est valide ou non */
  callbackValidDep(results,status){
    if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
      // set it to the correct, formatted address if it's valid
      this.searchElementRefDep.nativeElement.value = results[0].formatted_address;
      this.adresseDepValid=true      
      this.calcul()
    } 
    else{
      this.adresseDepValid=false;
      this.distance=""
      this.duree=""
    }  
      
  }

  /** Méthode callabck de la deuxième adresse pour savoir si elle est valide ou non */
  callbackValidArr(results,status){
    if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
      this.searchElementRefArr.nativeElement.value = results[0].formatted_address;
      this.adresseArrValid=true
      this.calcul()
    } 
    else  {
      this.adresseArrValid=false;
      this.distance=""
      this.duree=""
    }  
  }

  /** Méthode pour calculer la distance et la durée d'un trajet si les deux adresses sont valide*/
  calcul(){
    if(this.adresseDepValid && this.adresseArrValid){    
      
      var service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [this.searchElementRefDep.nativeElement.value],
          destinations: [this.searchElementRefArr.nativeElement.value],
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false,
        }, this.callback.bind(this));  
    }
  }

  /** Callback de la méthode getDistanceMatrix pour récuperer la distance et la durée*/
  callback(response, status){
    if (status == 'OK') {
      var origins = response.originAddresses;
      var destinations = response.destinationAddresses;
  
      for (var i = 0; i < origins.length; i++) {
        var results = response.rows[i].elements;
        for (var j = 0; j < results.length; j++) {
          var element = results[j];
          this.distance=element.distance.text          
          this.duree= element.duration.text 
          this.ref.detectChanges();

          this.formEventDuree.emit(this.duree)
          this.formEventDistance.emit(this.distance)
          this.formEventDep.emit(this.searchElementRefDep.nativeElement.value)
          this.formEventArr.emit(this.searchElementRefArr.nativeElement.value)
        }
      }
    }
  }

  @Output() emitTest:EventEmitter<string> = new EventEmitter<string>()

  emitDepart(){
    this.emitTest.emit(this.searchElementRefDep.nativeElement.value)
    console.log(this.emitTest);
    
  }

  testDate(){
    console.log(this.elementRefDate.nativeElement.value)
    var essai = new Date(this.elementRefDate.nativeElement.value)
    console.log(essai.toLocaleDateString());
  }
}
