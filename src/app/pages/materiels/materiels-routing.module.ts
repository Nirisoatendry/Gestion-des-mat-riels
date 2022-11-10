import { HistoriqueMaterielComponent } from './../../features/materiels/historique-materiel/historique-materiel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterComponent } from 'src/app/features/materiels/ajouter/ajouter.component';
import { ListesComponent } from 'src/app/features/materiels/listes/listes.component';
import {ViewMaterielsComponent} from "../../features/materiels/view-materiels/view-materiels.component";


const routes: Routes = [
  {
    path: 'ajouter',
    component:AjouterComponent
  },
  {
    path:'listes',
    component:ListesComponent
  },
  {
    path:'historique',
    component:HistoriqueMaterielComponent
  },
  {
    path:'view',
    component:ViewMaterielsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterielsRoutingModule { }
