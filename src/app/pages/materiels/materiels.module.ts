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
import { MaterielsComponent } from './materiels.component';
@NgModule({
  declarations: [
    MaterielsComponent,
    ListesComponent,
    HistoriqueMaterielComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    MaterielsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterielsModule { }
