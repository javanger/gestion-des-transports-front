import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VehiculePersonnel } from '../../model';
import { VehiculePersonnelService } from "../../services/vehicule-personnel.service"

@Component({
  selector: 'vehicule-covoiturage-creation',
  templateUrl: './vehicule-covoiturage-creation.component.html',
  styleUrls: ['./vehicule-covoiturage-creation.component.scss']
})
export class VehiculeCovoiturageCreationComponent implements OnInit {

  vehicule: any ={}

  @Output() formEventVehicule: EventEmitter<any> = new EventEmitter()

  constructor(private pVehiculePersonnelService: VehiculePersonnelService) { }

  ngOnInit() {
  }

  creerVehicule(){
    this.pVehiculePersonnelService.ajouterVehiculePersonnel(this.vehicule)
  }

}
