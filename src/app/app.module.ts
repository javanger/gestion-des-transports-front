import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ListeReservationComponent } from './shared/reservation/listeReservation.component';
import { ReservationCovoiturageService } from './services/reservation/reservationCovoiturage.service';
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  { path: 'collaborateur/reservations/', component: ListeReservationComponent }, // Réservation
  { path: 'collaborateur/annonces/', component: MenuComponent }, // Annonce
  { path: 'collaborateur/statistiques', component: MenuComponent }, // Statistique
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListeReservationComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ReservationCovoiturageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
