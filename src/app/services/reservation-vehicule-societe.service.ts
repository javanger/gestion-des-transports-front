import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Reservation, ReservationVehiculeSociete } from "../model";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

const URL_BACKEND = environment.apiUrl;
@Injectable()
export class ReservationVehiculeSocieteService {
  constructor(private _http: HttpClient) {}



  trouverReserationEnCours( immatriculation: string ): Observable<ReservationVehiculeSociete[]> {
    {
      return this._http
        .get(URL_BACKEND + "reservationsSociete/" + immatriculation)

        .map(
          (data: any) => {
            return data
              .map((v: any) => new ReservationVehiculeSociete(v))
              },
          
          (error: any) => {}
        );
    }
  }

  trouverReserationHisto( immatriculation: string ): Observable<ReservationVehiculeSociete[]> {
    {
      return this._http
        .get(URL_BACKEND + "reservationsSociete/" + immatriculation)

        .map(
          (data: any) => {
            return data
              .map((v: any) => new ReservationVehiculeSociete(v))
          },
          (error: any) => {}
        );
    }
  }
}
