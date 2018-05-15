import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VehiculePersonnel } from '../model';
import { Observable } from "rxjs/Observable";

const URL_BACKEND = environment.apiUrl;

@Injectable()
export class VehiculePersonnelService {

  constructor(private _http: HttpClient) { }

  ajouterVehiculePersonnel(vehicule:any):void{    
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    this._http.post(
      // url d'accès au service
      URL_BACKEND + "vehiculePersonnel/creer/",
      // corps de la réquête
      {
        "immatriculation": vehicule.immatriculation, 
        "marque": vehicule.marque, 
        "modele": vehicule.modele,
        "nbPlaces":vehicule.nbPlaces
      },
      // options de la requête HTTP
      httpOptions
      ).subscribe();
    }

  
}
