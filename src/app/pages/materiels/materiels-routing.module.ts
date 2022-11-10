import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterComponent } from 'src/app/features/materiels/ajouter/ajouter.component';
import { ListesComponent } from 'src/app/features/materiels/listes/listes.component';


const routes: Routes = [
  {
    path: 'ajouter',
    component:AjouterComponent
  },
  {
    path:'listes',
    component:ListesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterielsRoutingModule { }
