import { HistoriqueMaterielComponent } from './../../features/materiels/historique-materiel/historique-materiel.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ListesComponent } from './../../features/materiels/listes/listes.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterielsRoutingModule } from './materiels-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MaterielsComponent } from './materiels.component';
import { AjouterComponent } from 'src/app/features/materiels/ajouter/ajouter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import {ViewMaterielsComponent} from "../../features/materiels/view-materiels/view-materiels.component";


@NgModule({
  declarations: [
    MaterielsComponent,
    ListesComponent,
    HistoriqueMaterielComponent,
    AjouterComponent,
    ViewMaterielsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  imports:[
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
export class MaterielsModule { }
