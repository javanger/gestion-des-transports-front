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
import { ListerVehiculeComponent } from './shared/lister-vehicule/lister-vehicule.component';
import { VehiculeSocieteComponent } from './shared/vehiculeSociete/vehiculeSociete.component';
import { DetaisVehiculeComponent } from './shared/detais-vehicule/detais-vehicule.component';
import { ItineraireCreationComponent } from './shared/itineraire-creation/itineraire-creation.component';
import { VehiculeCovoiturageCreationComponent } from './shared/vehicule-covoiturage-creation/vehicule-covoiturage-creation.component';
import { HoraireCovoiturageCreationComponent } from './shared/horaire-covoiturage-creation/horaire-covoiturage-creation.component';
import { ReserverCovoiturageComponent } from './shared/reservation/reserver-covoiturage/reserver-covoiturage.component';
import { CritereReservationComponent } from './shared/reservation/critere-reservation/critere-reservation.component';
import { ListeReservationComponent } from './shared/reservation/listeReservation/listeReservation.component';
import { DeconnexionComponent } from './shared/deconnexion/deconnexion.component';
import { ConnexionComponent } from './shared/connexion/connexion.component';
import { ReservationCovoiturageService } from './services/reservation/reservationCovoiturage.service';
import { ReservationVehiculeSocieteService } from './services/reservation-vehicule-societe.service';
import { VehiculeSocieteService } from './services/vehiculeSociete.service';
import { VehiculePersonnelService } from './services/vehicule-personnel.service';
import { AnnonceService } from './services/annonce/annonce.service';
import { AnnonceCollaborateurService } from './services/annonce-collaborateur.service'
import { ConnexionService } from './services/connexion.service';
import { FilterAnnonceAdressePipe } from './pipes/filter-annonce-adresse.pipe';
import { FilterAnnonceDatePipe } from './pipes/filter-annonce-date.pipe'
import { CreerAnnonceComponent } from './pages/creer-annonce/creer-annonce.component';
import { PageConnexionComponent } from './pages/connexion/pageConnexion.component';


import { AnnonceCollaborateurComponent } from './shared/annonce-collaborateur/annonce-collaborateur.component';
const appRoutes: Routes = [
  { path: 'connexion', component: PageConnexionComponent }, // connexion
  //Pages de collaborateurs
  { path: 'collaborateur/reservations', component: ListeReservationComponent }, // Liste des réservations
  { path: 'collaborateur/reservations/creer', component: ReserverCovoiturageComponent }, // Création d'une reservation de covoiturage
  { path: 'collaborateur/annonces', component: AnnonceCollaborateurComponent }, // Liste des annonces
  { path: 'collaborateur/annonces/creer', component: CreerAnnonceComponent }, // Création des annonces
  //Pages des admins
  { path: 'admin/vehicules', component : ListerVehiculeComponent}, // Liste des véhicules
  { path: 'admin/vehicules/:immatriculation', component: DetaisVehiculeComponent }, // Détails d'un véhicule
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
    CritereReservationComponent,
    DeconnexionComponent,
    DetaisVehiculeComponent,
    ConnexionComponent,
    PageConnexionComponent,
    AnnonceCollaborateurComponent

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
