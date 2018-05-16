import { Component, OnInit, Input } from '@angular/core';
import { CategorieVehicule, ReservationVehiculeSociete, VehiculeSociete } from '../../model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ReservationVehiculeSocieteService } from '../../services/reservation-vehicule-societe.service';
import { VehiculeSocieteService } from '../../services/vehiculeSociete.service';

@Component({
  selector: 'detais-vehicule',
  templateUrl: './detais-vehicule.component.html',
  styleUrls: ['./detais-vehicule.component.scss']
})
export class DetaisVehiculeComponent implements OnInit {
  @Input() reservations: Array<ReservationVehiculeSociete>;

  @Input() listeEnCours : Array<ReservationVehiculeSociete>;
  @Input() listeHistorique : Array<ReservationVehiculeSociete>;

 vehicule: VehiculeSociete;
CategorieVehicule : typeof CategorieVehicule = CategorieVehicule;

immatriculation:string;

  constructor(private route: ActivatedRoute, private sVehicule: VehiculeSocieteService , private sReservation : ReservationVehiculeSocieteService) {
    this.immatriculation = route.snapshot.paramMap.get("immatriculation");
   this.sVehicule.trouverVehicule(this.immatriculation).subscribe( i => {
    this.vehicule = i  }
  );
 
   }

  ngOnInit() {
    
    this.sVehicule.trouverVehicule(this.immatriculation).subscribe((data: any) => {
      this.vehicule = data;
    });
    this.sReservation.trouverReservationEnCours(this.immatriculation).subscribe((data:any)=>{
      this.listeEnCours = data
      console.log(this.listeEnCours);
    })

    this.sReservation.trouverReservationHisto(this.immatriculation).subscribe((data:any)=>{
      this.listeHistorique = data
      console.log(this.listeHistorique);
     
    })
    
   
  }
  
}
