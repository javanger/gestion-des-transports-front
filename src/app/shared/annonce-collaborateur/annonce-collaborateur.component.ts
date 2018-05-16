import { Component, OnInit, Input } from '@angular/core';
import { Annonce, Status } from '../../model';
import { AnnonceCollaborateurService } from '../../services/annonce-collaborateur.service';


@Component({
  selector: 'app-annonce-collaborateur',
  templateUrl: './annonce-collaborateur.component.html',
  styleUrls: ['./annonce-collaborateur.component.scss']
})
export class AnnonceCollaborateurComponent implements OnInit {
  annonces : Array<Annonce>;
  @Input() listeAnnoncesEnCours:Array<Annonce> = null;
  @Input() listeAnnoncesHistorique: Array<Annonce> = null;
  CompareStatus : typeof Status = Status;
  statusC: Array<any> = []
 

  constructor(private serviceAnnonce:AnnonceCollaborateurService) { 

    this.serviceAnnonce.listerAnnonces("M002").subscribe((data:any) => {
      this.annonces = data            
      console.log(this.annonces);

      for (let item in this.CompareStatus) {
        this.statusC.push({value: item})
      }

      
this.listeAnnoncesEnCours = this.annonces.filter(a => a.status == this.statusC[0].value);
this.listeAnnoncesHistorique = this.annonces.filter(a => a.status == this.statusC[2].value);



      
      


        
})


  }

  annulerUneAnnonce(annonce : Annonce){
   annonce.status = this.statusC[1].value;
    this.serviceAnnonce.annulerAnnonces(annonce).subscribe();
    console.log(annonce.id)


  }






  
  

  ngOnInit() {
  }

}
