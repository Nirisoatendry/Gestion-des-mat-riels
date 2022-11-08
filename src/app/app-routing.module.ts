import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { PagesComponent } from './pages/pages.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
