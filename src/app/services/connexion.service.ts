import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';



@Injectable()
export class ConnexionService {

  constructor(private _http: HttpClient,private router: Router) { }




}
