import { Component, OnInit, Input } from "@angular/core";
import { VehiculeSociete, CategorieVehicule } from "../../model";
import { VehiculeSocieteService } from "../../services/vehiculeSociete.service";
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: "lister-vehicule",
  templateUrl: "./lister-vehicule.component.html",
  styleUrls: ["./lister-vehicule.component.scss"]
})
export class ListerVehiculeComponent implements OnInit {
  @Input() vehicules: Array<VehiculeSociete>;
  CategorieVehicule : typeof CategorieVehicule = CategorieVehicule;
  optionSelect: Array<any> = [];
  
  ajoutVehicule : VehiculeSociete = new VehiculeSociete(null,null,null,null);

  constructor(private router: Router, private sVehicule: VehiculeSocieteService) {
    this.sVehicule.listerVehicules().subscribe((data: any) => {
      this.vehicules = data;
    });

  }
  submit() { 
    this.sVehicule.ajouterVehicule(this.ajoutVehicule).subscribe((data:any) => {
      this.ajoutVehicule = data;
     })
     //window.location.reload(false);
   }
  ngOnInit() {
    // Ajouts des option pour le select des catégories

    for (let item in this.CategorieVehicule) {
      this.optionSelect.push({value: item, label:CategorieVehicule[item]})
    }
  }
}
