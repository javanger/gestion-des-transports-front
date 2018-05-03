import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ListerVehiculeComponent } from './shared/lister-vehicule/lister-vehicule.component';
import { VehiculeComponent } from './shared/vehicule/vehicule.component';
import { VehiculeService } from './services/vehicule.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
const appRoutes: Routes = [
  { path: 'collaborateur/reservations/', component: MenuComponent }, // Réservation
  { path: 'collaborateur/annonces/', component: MenuComponent }, // Annonce
  { path: 'collaborateur/statistiques', component: MenuComponent }, // Statistique
  { path: 'admin/vehicules', component : ListerVehiculeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListerVehiculeComponent,
    VehiculeComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule


  ],
  providers: [VehiculeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
