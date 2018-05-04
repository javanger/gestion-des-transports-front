import { Component, OnInit, Input } from '@angular/core';
import { AnnonceService } from '../../../services/annonce/annonce.service';
import { Annonce } from '../../../model';
import { Router } from '@angular/router';

@Component({
  selector: 'reserver-covoiturage',
  templateUrl: './reserver-covoiturage.component.html',
  styleUrls: ['./reserver-covoiturage.component.scss']
})
export class ReserverCovoiturageComponent implements OnInit {

@Input() annonces:Array<Annonce>
@Input() detailAnnonce:Annonce = null

  constructor(private serviceAnnonce:AnnonceService,private router: Router) {
    this.serviceAnnonce.listerAnnonce().subscribe((data:any) => {
      this.annonces = data            
      console.log(this.annonces);      
    })
  }

  ngOnInit() {
  }

  details(id:number){
    this.serviceAnnonce.detailAnnonce(id).subscribe((data:any) => {
      this.detailAnnonce = data
      console.log(this.detailAnnonce);            
    })
  }

  reservation(){
    //Decrementer nombre place disponible annonce
    this.detailAnnonce.nombrePlace --
    //Enregister la reservation et l'annonce modifier en base

    //Redirection
    //this.router.navigate(['collaborateur/reservations/'])
  }

}