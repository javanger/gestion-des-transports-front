import { Component, OnInit, Input } from "@angular/core";
import { Vehicule, CategorieVehicule } from "../../model";
import { VehiculeService } from "../../services/vehicule.service";

@Component({
  selector: "app-lister-vehicule",
  templateUrl: "./lister-vehicule.component.html",
  styleUrls: ["./lister-vehicule.component.scss"]
})
export class ListerVehiculeComponent implements OnInit {
  @Input() vehicules: Array<Vehicule>;
  CategorieVehicule : typeof CategorieVehicule = CategorieVehicule;
  optionSelect: Array<any> = [];
 

  constructor(private sVehicule: VehiculeService) {}

  ngOnInit() {
    this.sVehicule.listerVehicules().subscribe((data: any) => {
      this.vehicules = data;
    });
    
// Ajouts des option pour le select des catégories

    for (let item in this.CategorieVehicule) {
      this.optionSelect.push({value: item, label:CategorieVehicule[item]})
    
          
      
  }
 

  console.log(this.optionSelect);


  }
}
