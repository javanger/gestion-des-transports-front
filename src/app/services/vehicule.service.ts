import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Vehicule } from "../model";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';

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
}
