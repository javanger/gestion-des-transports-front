import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ListeReservationComponent } from './shared/reservation/listeReservation/listeReservation.component';
import { ReservationCovoiturageService } from './services/reservation/reservationCovoiturage.service';
import { ListerVehiculeComponent } from './shared/lister-vehicule/lister-vehicule.component';
import { VehiculeSocieteComponent } from './shared/vehiculeSociete/vehiculeSociete.component';
import { VehiculeSocieteService } from './services/vehiculeSociete.service';
import { VehiculePersonnelService } from './services/vehicule-personnel.service';
import { ReservationVehiculeSocieteService } from './services/reservation-vehicule-societe.service';
import { CreerAnnonceComponent } from './pages/creer-annonce/creer-annonce.component';
import { ConnexionService } from './services/connexion.service';
import { DetaisVehiculeComponent } from './shared/detais-vehicule/detais-vehicule.component';
import { ItineraireCreationComponent } from './shared/itineraire-creation/itineraire-creation.component';
import { ReserverCovoiturageComponent } from './shared/reservation/reserver-covoiturage/reserver-covoiturage.component';
import { AnnonceService } from './services/annonce/annonce.service';
import { FilterAnnonceAdressePipe } from './pipes/filter-annonce-adresse.pipe';
import { FilterAnnonceDatePipe } from './pipes/filter-annonce-date.pipe'
import { VehiculeCovoiturageCreationComponent } from './shared/vehicule-covoiturage-creation/vehicule-covoiturage-creation.component';
import { HoraireCovoiturageCreationComponent } from './shared/horaire-covoiturage-creation/horaire-covoiturage-creation.component';
import { ConnexionComponent } from './shared/connexion/connexion.component';
import { PageConnexionComponent } from './pages/connexion/pageConnexion.component';
import { DeconnexionComponent } from './shared/deconnexion/deconnexion.component';
import { AnnonceCollaborateurService } from './services/annonce-collaborateur.service'

const appRoutes: Routes = [
  { path: 'collaborateur/reservations/', component: ListeReservationComponent }, // Réservation
  { path: 'collaborateur/annonces/', component: CreerAnnonceComponent }, // Annonce
  { path: 'collaborateur/statistiques', component: MenuComponent }, // Statistique
  { path: 'admin/vehicules', component : ListerVehiculeComponent}, // lister véhicules
  { path: 'vehicules/:immatriculation', component: DetaisVehiculeComponent }, // détails d'une véhicule
 // { path: 'connexion', component: PageConnexionComponent } // connexion
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListeReservationComponent,
    CreerAnnonceComponent,
    ItineraireCreationComponent,
    ListerVehiculeComponent,
    ReserverCovoiturageComponent,
    FilterAnnonceAdressePipe,
    FilterAnnonceDatePipe,
    VehiculeSocieteComponent,
    VehiculeCovoiturageCreationComponent,
    HoraireCovoiturageCreationComponent,
    DeconnexionComponent,
    DetaisVehiculeComponent,
    ConnexionComponent,
    PageConnexionComponent
  ],
  imports: [
    BrowserModule,    
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAYzXigARjswquPe9Jz4bz1M50GKf2DMoI",
      libraries: ["places"]
    })

  ],
  providers: [
    ReservationCovoiturageService,
    AnnonceService,
    VehiculeSocieteService,
    ReservationCovoiturageService,
    VehiculePersonnelService,
    ReservationVehiculeSocieteService,
    AnnonceCollaborateurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
