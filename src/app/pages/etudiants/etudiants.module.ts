import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantsComponent } from './etudiants.component';
import { EmpruntComponent } from 'src/app/features/etudiants/emprunt/emprunt.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EtudiantsComponent,
    EmpruntComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    EtudiantsRoutingModule
  ]
})
export class EtudiantsModule { }
