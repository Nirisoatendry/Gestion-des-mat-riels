import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpruntComponent } from './features/etudiants/emprunt/emprunt.component';
import { HistoriqueComponent } from './features/etudiants/historique/historique.component';
import { ListesComponent } from './features/materiels/listes/listes.component';
import { AjouterComponent } from './features/materiels/ajouter/ajouter.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpruntComponent,
    HistoriqueComponent,
    ListesComponent,
    AjouterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
