import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ReservationComponent } from './shared/reservation/reservation.component';
import { ReservationService } from './services/reservation/reservation.service';
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  { path: 'collaborateur/reservations/', component: ReservationComponent }, // Réservation
  { path: 'collaborateur/annonces/', component: MenuComponent }, // Annonce
  { path: 'collaborateur/statistiques', component: MenuComponent }, // Statistique
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
