import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ListerVehiculeComponent } from './shared/lister-vehicule/lister-vehicule.component';
import { VehiculeComponent } from './shared/vehicule/vehicule.component';
import { VehiculeService } from './services/vehicule.service';
import { ReservationVehiculeSocieteService } from './services/reservation-vehicule-societe.service';
import { CreerAnnonceComponent } from './pages/creer-annonce/creer-annonce.component';
import { ConnexionService } from './services/connexion.service';
import { DetaisVehiculeComponent } from './shared/detais-vehicule/detais-vehicule.component';
import { ItineraireCreationComponent } from './shared/itineraire-creation/itineraire-creation.component';
import { ConnexionComponent } from './shared/connexion/connexion.component';
import { DeconnexionComponent } from './shared/deconnexion/deconnexion.component';

const appRoutes: Routes = [
  { path: 'collaborateur/reservations/', component: MenuComponent }, // Réservation
  { path: 'collaborateur/annonces/', component: MenuComponent }, // Annonce
  { path: 'collaborateur/statistiques', component: MenuComponent }, // Statistique
  { path: 'admin/vehicules', component : ListerVehiculeComponent}, // lister véhicules
  { path: 'vehicules/:immatriculation', component: DetaisVehiculeComponent }, // détails d'une véhicule
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,    
    CreerAnnonceComponent,
    ItineraireCreationComponent,
    ListerVehiculeComponent,
    VehiculeComponent,
    DeconnexionComponent,
    DetaisVehiculeComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,    
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAYzXigARjswquPe9Jz4bz1M50GKf2DMoI",
      libraries: ["places"]
    })
  ],
  providers: [VehiculeService,
    ReservationVehiculeSocieteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
