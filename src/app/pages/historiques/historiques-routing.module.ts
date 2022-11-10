import { HistoriquesComponent } from './historiques.component';
import { HistoriqueComponent } from 'src/app/features/etudiants/historique/historique.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HistoriquesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriquesRoutingModule { }
