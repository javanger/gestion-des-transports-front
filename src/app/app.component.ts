import {Component} from '@angular/core';
import {environment} from "../environments/environment";
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiUrl = environment.apiUrl;
}
