import { Component, OnInit, Input } from '@angular/core';
import { ReservationService } from '../../services/reservation/reservation.service';
import { Reservation, Status } from '../../../model';

@Component({
  selector: 'reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  
  reservations : Array<Reservation>;
  @Input() listeHistorique:Array<Reservation> = null
  @Input() listeEnCours:Array<Reservation> = null
  @Input() detailReservation:Reservation = null
  

  constructor(private serviceReservation:ReservationService) {
    //Changer listerReservation() par listeReservationCollaborateur() quand connexion implanté
    this.serviceReservation.listerReservation().subscribe((data:any) => {
            this.reservations = data            
            console.log(this.reservations);  
            this.historique()
            this.enCours()          
    })
  }   

  ngOnInit() { 
  }
  
  historique(){
    if (this.reservations != null) {
      this.listeHistorique = this.reservations.filter(r => {r.annonce.date < new Date();
                                                            r.status != Status.EN_COURS
      })    
    }
    console.log(this.listeHistorique);
  }

  enCours(){
    if (this.reservations != null) {
      this.listeEnCours = this.reservations.filter(r =>{r.annonce.date >= new Date();
                                                        r.status != Status.ANNULE
      })
    }
    console.log(this.listeEnCours);
  }
  

  details(id:number){
    this.serviceReservation.detailReservation(id).subscribe((data:any) => {
      this.detailReservation = data
      console.log(this.detailReservation);            
    })
  }
}
