import { Component, OnInit, Input } from '@angular/core';
import { Annonce } from '../../model';


@Component({
  selector: 'app-annonce-collaborateur',
  templateUrl: './annonce-collaborateur.component.html',
  styleUrls: ['./annonce-collaborateur.component.scss']
})
export class AnnonceCollaborateurComponent implements OnInit {
  @Input() listeCovoiturageEnCours:Array<Annonce> = null

  constructor() { }

  ngOnInit() {
  }

}
