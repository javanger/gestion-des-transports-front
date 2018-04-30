import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './shared/menu/menu.component';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './shared/connexion/connexion.component';
import { DeconnexionComponent } from './shared/deconnexion/deconnexion.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'collaborateur/reservations/', component: MenuComponent }, // Réservation
  { path: 'collaborateur/annonces/', component: MenuComponent }, // Annonce
  { path: 'collaborateur/statistiques', component: MenuComponent }, // Statistique
];

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    MenuComponent,
    DeconnexionComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
