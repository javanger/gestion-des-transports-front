import { Component, OnInit, Input } from "@angular/core";
import { Vehicule, CategorieVehicule } from "../../model";
import { VehiculeService } from "../../services/vehicule.service";
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: "lister-vehicule",
  templateUrl: "./lister-vehicule.component.html",
  styleUrls: ["./lister-vehicule.component.scss"]
})
export class ListerVehiculeComponent implements OnInit {
  @Input() vehicules: Array<Vehicule>;
  CategorieVehicule : typeof CategorieVehicule = CategorieVehicule;
  optionSelect: Array<any> = [];
  ajoutVehicule : Vehicule = new Vehicule(null);

 

  constructor(private router: Router, private sVehicule: VehiculeService) {
    this.sVehicule.listerVehicules().subscribe((data: any) => {
      this.vehicules = data;
    });

  }
  submit() { 
    this.sVehicule.ajouterVehicule(this.ajoutVehicule).subscribe((data:any) => {
      
      this.ajoutVehicule = data;

     })

     window.location.reload(false);
    
    
   }
  ngOnInit() {
   
    
// Ajouts des option pour le select des catégories

    for (let item in this.CategorieVehicule) {
      this.optionSelect.push({value: item, label:CategorieVehicule[item]})
    
          
      
  }
 

  console.log(this.optionSelect);


  }
}
