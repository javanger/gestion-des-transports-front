import { Component, OnInit, Input } from '@angular/core';
import { Vehicule, CategorieVehicule } from '../../model';

@Component({
  selector: 'vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.scss']
})
export class VehiculeComponent implements OnInit {
  CategorieVehicule : typeof CategorieVehicule = CategorieVehicule;

  @Input() vehicule: Vehicule;


  constructor() { }

  ngOnInit() {
   
  }

}
