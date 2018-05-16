import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.scss']
})
export class DeconnexionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  deconnexion(){
    alert("Vous êtes déconnecté ");
    this.router.navigate(["/accueil"]);
  }

}
