import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'materiels/listes',
    pathMatch:'full'
  },
  {
    path:'',
    component:PagesComponent,
    children : [
      {
        path :'etudiants',
        loadChildren : () => import('./etudiants/etudiants.module').then(m=>m.EtudiantsModule),
      },
      {
        path:'materiels',
        loadChildren : () => import('./materiels/materiels.module').then(m=>m.MaterielsModule)
      },
      {
        path:'historique',
        loadChildren : () => import('./historiques/historiques.module').then(m=>m.HistoriquesModule)
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
