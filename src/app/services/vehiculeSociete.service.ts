import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { VehiculeSociete } from "../model";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

const URL_BACKEND = environment.apiUrl;
@Injectable()
export class VehiculeSocieteService {
  constructor(private _http: HttpClient) {}

  listerVehicules(): Observable<VehiculeSociete[]> {
    { 
      return this._http
        .get(URL_BACKEND + "vehicules")

        .map(
          (data: any) => {
            return data.map((v: any) => new VehiculeSociete(
              {"immatriculation":v.immatriculation,
               "marque": v.marque,
               "modele": v.modele,
               "nbPlaces": v.nbPlaces}, 
              v.categorie,
              v.urlPhoto));
          },
          (error: any) => {}
        );
    }
  }

    ajouterVehicule(vehicule:VehiculeSociete):Observable<VehiculeSociete>  {
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
    "nbPlaces": vehicule.nbPlaces,
    "categorie" : vehicule.categorie,
    "urlPhoto": vehicule.urlPhoto
    },httpOptions)
    .do((data : any) => data )
  }

  trouverVehicule(immatriculation: string): Observable<VehiculeSociete> {
    return this._http.get(URL_BACKEND + "vehicules/" + immatriculation).map((c: any) => {
      return new VehiculeSociete({
        "immatriculation":c.immatriculation,
        "marque":c.marque,
        "modele":c.modele,
        "nbPlaces":c.nbPlaces
      },
      c.categorie,
      c.urlPhoto)
    });
  }
}
