import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Reservation } from '../../../model';
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';


const URL_BACKEND = environment.apiUrl;
@Injectable()
export class ReservationService {

  constructor(private _http: HttpClient) { }

  listerReservation(): Observable<Reservation[]> {  
    return this._http
    .get(URL_BACKEND + "/reservations")
    .map(
      (data: any) => {
        return data.map((d: any) => new Reservation(d));
      },
      (error: any) => { }
      );
  }

  detailReservation(id:number): Observable<Reservation> {
    return this._http
    .get(URL_BACKEND + "/detail/reservations/"+id)
    .map(
      (data: any) => {
        return data;
      },
      (error: any) => { }
      );
  }
  
  listeResercationCollaborateur(matricule:string): Observable<Reservation[]> {
    return this._http
    .get(URL_BACKEND + "/reservations/"+matricule)
    .map(
      (data: any) => {
        return data.map((d: any) => new Reservation(d));
      },
      (error: any) => { }
      );
  }
}
