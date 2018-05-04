import { Component, OnInit, Input } from '@angular/core';
import { VehiculeSociete, CategorieVehicule } from '../../model';

@Component({
  selector: 'vehicule-societe',
  templateUrl: './vehiculeSociete.component.html',
  styleUrls: ['./vehiculeSociete.component.scss']
})
export class VehiculeSocieteComponent implements OnInit {
  CategorieVehicule : typeof CategorieVehicule = CategorieVehicule;

  @Input() vehiculeSociete: VehiculeSociete;


  constructor() { }

  ngOnInit() {
   
  }

}
