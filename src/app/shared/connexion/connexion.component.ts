import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

class MonModel { email:string; password:string;}
@Component({
  selector: 'connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {


  monModel:MonModel = new MonModel();
  constructor(private router: Router) { 
 
  }

  ngOnInit() {
  }

  redirectCollab(){
    this.router.navigate([''])
  }
  redirectChauffeur(){

  }
}
