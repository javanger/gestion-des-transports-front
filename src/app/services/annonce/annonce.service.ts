import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../../model';
import { Observable } from "rxjs/Observable";

const URL_BACKEND = environment.apiUrl;
@Injectable()
export class AnnonceService {

  constructor(private _http: HttpClient) { }

  listerAnnonce() : Observable<Annonce[]>{
    return this._http
    .get(URL_BACKEND + "annonces")
    .map(
      (data: any) => {
        return data.map((d: any) => new Annonce(d));
      },
      (error: any) => { }
      );
  }
  detailAnnonce(id:number): Observable<Annonce> {
    return this._http
    .get(URL_BACKEND + "detail/annonces/"+id)
    .map(
      (data: any) => {
        return data;
      },
      (error: any) => { }
      );
  }
}
