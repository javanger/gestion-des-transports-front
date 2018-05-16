import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Annonce } from '../model';
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

    return this._http.patch<Annonce>(URL_BACKEND + "status/annonces/" + uneAnnonce.id,
    {
     "action" : "ANNULER"
    },
    httpOptions)

    .do((data : any) =>{
      return data;
    })

 }


}