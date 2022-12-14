import { ViewMaterielsComponent } from './../../features/materiels/view-materiels/view-materiels.component';
import { HistoriqueMaterielComponent } from './../../features/materiels/historique-materiel/historique-materiel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterComponent } from 'src/app/features/materiels/ajouter/ajouter.component';
import { ListesComponent } from 'src/app/features/materiels/listes/listes.component';

const routes: Routes = [
  {
    path:'',
    redirectTo :'listes',
    pathMatch : 'full'
  },
  {
    path: 'ajouter',
    component:AjouterComponent
  },
  {
    path: 'edit/:id',
    component:AjouterComponent
  },
  {
    path:'listes',
    component:ListesComponent,
  },
  {
    path:'listesDisponible',
    component:ListesComponent,
  },
  {
    path:'listes/:id',
    component:ViewMaterielsComponent
  },
  {
    path:'historique',
    component:HistoriqueMaterielComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterielsRoutingModule { }
