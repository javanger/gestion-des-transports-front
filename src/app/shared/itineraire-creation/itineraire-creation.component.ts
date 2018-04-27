import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'itineraire-creation',
  templateUrl: './itineraire-creation.component.html',
  styleUrls: ['./itineraire-creation.component.css']
})
export class ItineraireCreationComponent implements OnInit {

  duree:string = "Ici la durée prochainement"
  distance:string ="ici bientot la distance"

  constructor() { }

  ngOnInit() {
  }

}
