import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './shared/connexion/connexion.component';
import { DeconnexionComponent } from './shared/deconnexion/deconnexion.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    DeconnexionComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
