import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'creer-annonce',
  templateUrl: './creer-annonce.component.html',
  styleUrls: ['./creer-annonce.component.css']
})
export class CreerAnnonceComponent implements OnInit {


  duree:string
  distance:string
  adresseDepart:string
  adresseArrivee:string

  vehicule:any

  dateComplete:any
  date:any
  heure:string
  minute:string

  constructor() { }

  ngOnInit() {
  }

  traiterItineraire(infos :string[]){
    this.adresseDepart=infos[0];
    this.adresseArrivee=infos[1];
    this.duree=infos[2];
    this.distance=infos[3];
  }

  traiterVehicule(vehicule:any){
    this.vehicule=vehicule;
    
  }

  traiterHoraire(date:any){
    
    this.dateComplete=date
  
  }

  validerFormulaire(){
    console.log(this.duree);
    console.log(this.distance);
    console.log(this.adresseDepart);
    console.log(this.adresseArrivee);
    console.log(this.vehicule);

    this.date=this.dateComplete.date
    this.heure=this.dateComplete.heure
    this.minute=this.dateComplete.minute
    console.log(this.date);
    console.log(this.heure);
    console.log(this.minute);
    
    
  }
}
