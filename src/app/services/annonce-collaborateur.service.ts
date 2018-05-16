import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Annonce, Vehicule } from '../model';
import { Observable } from 'rxjs/Observable';
const URL_BACKEND = environment.apiUrl;

@Injectable()
export class AnnonceCollaborateurService {
  constructor(private _http: HttpClient) { }

  listerAnnonces(matricule:string): Observable<Annonce> {
    
    return this._http
    .get(URL_BACKEND + "annonces/"+matricule)
    .map(
      (data: any) => {
        return data.map((d: any) => new Annonce(d));
      },
      (error: any) => { }
      );
  }
  annulerAnnonces(uneAnnonce: Annonce) : Observable<Annonce>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
     };

     return this._http.patch(URL_BACKEND + "annonces/" + uneAnnonce.id + "/status",uneAnnonce, 
  
     httpOptions)

     .do((data : any) =>{
       return data;
     }) 

  }
  
   ajouterAnnonce(adresseDepart:string, adressArrivee:string, duree:string, distance:string ,vehicule:Vehicule,nbPlaces:number, date:Date):void{    
  const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  this._http.post(
    // url d'accès au service
    URL_BACKEND + "annonces/creer/",
    // corps de la réquête
    {
      
      "nbPlaces":nbPlaces
    },
    // options de la requête HTTP
    httpOptions
    ).subscribe();
  }


}

