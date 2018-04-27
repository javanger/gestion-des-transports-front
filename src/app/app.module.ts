import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { CreerAnnonceComponent } from './pages/creer-annonce/creer-annonce.component';
import { ItineraireCreationComponent } from './shared/itineraire-creation/itineraire-creation.component';



@NgModule({
  declarations: [
    AppComponent,
    CreerAnnonceComponent,
    ItineraireCreationComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
