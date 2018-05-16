import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Reservation, ReservationVehiculeSociete } from "../model";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

const URL_BACKEND = environment.apiUrl;
@Injectable()
export class ReservationVehiculeSocieteService {
  constructor(private _http: HttpClient) {}

  trouverReservationEnCours(
    immatriculation: string
  ): Observable<ReservationVehiculeSociete[]> {
    {
      return this._http
        .get(URL_BACKEND + "reservationsSociete/" + immatriculation)

        .map(
          (data: any) => {
            return data.map(
              (v: any) => new ReservationVehiculeSociete(v)
            ); /*.filter(dateRetour => {
               dateRetour >= new Date('17/05/2018 00:00');


            });*/
          },
          (error: any) => {}
        );
    }
  }

  trouverReservationHisto(
    immatriculation: string
  ): Observable<ReservationVehiculeSociete[]> {
    {
      return this._http
        .get(URL_BACKEND + "reservationsSociete/" + immatriculation)

        .map(
          (data: any) => {
            return data.map(
              (v: any) => new ReservationVehiculeSociete(v)
            ); /*.filter(dateRetour => {
               dateRetour < new Date('17/05/2018 00:00');


            });*/
          },
          (error: any) => {}
        );
    }
  }
}
