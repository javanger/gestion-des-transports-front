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
  constructor(private sVehicule: VehiculeService) {}

  ngOnInit() {
    this.sVehicule.listerVehicules().subscribe((data: any) => {
      this.vehicules = data;
    });
  }
}
