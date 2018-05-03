import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Vehicule } from "../model";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

const URL_BACKEND = environment.apiUrl;
@Injectable()
export class VehiculeService {
  constructor(private _http: HttpClient) {}

  listerVehicules(): Observable<Vehicule[]> {
    { 
      return this._http
        .get(URL_BACKEND + "/vehicules")

        .map(
          (data: any) => {
            return data.map((v: any) => new Vehicule(v));
          },
          (error: any) => {}
        );
    }
   
  }

  ajouterVehicule(vehicule:Vehicule):Observable<Vehicule>  {
    const httpOptions = {
          headers: new HttpHeaders({
            "Content-Type": "application/json"
          })
        };
    // TODO Aimer ou Détester un collègue côté serveur
    return this._http.post(URL_BACKEND + "vehicules/ajouter", 
    {

    "immatriculation" : vehicule.immatriculation,
    "marque" : vehicule.marque,
    "modele" : vehicule.modele,
    "categorie" : vehicule.categorie,
    "nbPlaces": vehicule.nbPlaces,
    "urlPhoto": vehicule.urlPhoto





    },
    httpOptions)
    
    .do((data : any) =>{
      
      return data;
      
    })

  }
}
