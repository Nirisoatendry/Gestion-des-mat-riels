import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { ParametresComponent } from './pages/parametres/parametres.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'auth',
    pathMatch : 'full'
  },
  {
    path:'auth',
    loadChildren : () => import('./pages/auth/auth.module').then(m=>m.AuthModule),
    component : AuthComponent
  },
  {
    path:'pages',
    loadChildren : ()=> import('./pages/pages.module').then(m=>m.PagesModule)
  },
  {
    path:'parametres',
    loadChildren : () => import('./pages/parametres/parametres.module').then(m=>m.ParametresModule),
    component:ParametresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
