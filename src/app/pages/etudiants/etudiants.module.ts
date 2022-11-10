import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantsComponent } from './etudiants.component';
import { HistoriqueComponent } from 'src/app/features/etudiants/historique/historique.component';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EtudiantsComponent,
    HistoriqueComponent
  ],
  imports: [
    CommonModule,
    EtudiantsRoutingModule,
    MatSelectModule,
    MatPaginatorModule,
    FormsModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    CommonModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule
  ]
})
export class EtudiantsModule { }
