import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Employe } from '../model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

const URL_BACKEND = environment.apiUrl;

@Injectable()
export class ConnexionService {

 /* connexionSub = new Subject<Employe>();
  deconnexionSub = new Subject<string>();
*/
  constructor(private _http: HttpClient,private router: Router) { }
 /* connexion(monModel:MonModel):Observable<Employe>{
    let body = `username=${monModel.matricule}&password=${monModel.passWord}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      withCredentials: true
     };
     return this._http.post(
      // url d'accès au service
      URL_BACKEND + "login",
      // corps de la réquête
      body,
      // options de la requête HTTP
      httpOptions)
      .map((data) => new Employe(data))
      .do((data) => localStorage.setItem("collaborateur", JSON.stringify(data)))
      .do((data) => this.connexionSub.next(data))
     
  }

  estConnecter():Observable<Employe> { 
    return this.connexionSub.asObservable();
  }

  deconnexion():Observable<string>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      withCredentials: true
     };
     return this._http.get(
      // url d'accès au service
      URL_BACKEND + "logout",
      // options de la requête HTTP
      httpOptions)
      .map((data)=> JSON.stringify(data))
      .do((data) => localStorage.removeItem("collaborateur"))
      .do((data) => this.deconnexionSub.next(data))
  }

  ceDeconnecte():Observable<string> { 
    return this.deconnexionSub.asObservable();
  }
*/


}
