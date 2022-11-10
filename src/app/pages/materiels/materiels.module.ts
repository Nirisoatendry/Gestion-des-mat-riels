import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MaterielsRoutingModule } from './materiels-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MaterielsComponent } from './materiels.component';
import { AjouterComponent } from 'src/app/features/materiels/ajouter/ajouter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    MaterielsComponent,
    AjouterComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MaterielsRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule
  ],
})
export class MaterielsModule { }
