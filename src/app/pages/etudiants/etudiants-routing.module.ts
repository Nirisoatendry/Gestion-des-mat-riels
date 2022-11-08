import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpruntComponent } from 'src/app/features/etudiants/emprunt/emprunt.component';
import { HistoriqueComponent } from 'src/app/features/etudiants/historique/historique.component';

const routes: Routes = [
  {
    path:'emprunt',
    component:EmpruntComponent
  },
  {
    path:'historique',
    component:HistoriqueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantsRoutingModule { }
