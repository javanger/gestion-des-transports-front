import { ElementRef, NgZone, OnInit, ViewChild, Component } from '@angular/core';
import { } from 'googlemaps';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';


@Component({
  selector: 'itineraire-creation',
  templateUrl: './itineraire-creation.component.html',
  styleUrls: ['./itineraire-creation.component.css']
})
export class ItineraireCreationComponent implements OnInit {

  duree:string = "Ici la durée prochainement"
  distance:string ="ici bientot la distance"
  
  public searchControl: FormControl;

  @ViewChild("searchDepart")
  public searchElementRefDep: ElementRef;

  @ViewChild("searchArrive")
  public searchElementRefArr: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader
  ) {}

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

}
