import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantsComponent } from './etudiants.component';


@NgModule({
  declarations: [
    EtudiantsComponent
  ],
  imports: [
    CommonModule,
    EtudiantsRoutingModule
  ]
})
export class EtudiantsModule { }
