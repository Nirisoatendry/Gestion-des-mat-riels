import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriquesComponent } from './historiques.component';
import { HistoriquesRoutingModule } from './historiques-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MaterielsRoutingModule } from '../materiels/materiels-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HistoriquesComponent
  ],
  imports: [
    CommonModule,
    HistoriquesRoutingModule,
    FormsModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MaterielsRoutingModule,
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
export class HistoriquesModule { }
