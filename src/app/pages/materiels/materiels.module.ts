import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterielsRoutingModule } from './materiels-routing.module';
import { MaterielsComponent } from './materiels.component';


@NgModule({
  declarations: [
    MaterielsComponent
  ],
  imports: [
    CommonModule,
    MaterielsRoutingModule
  ]
})
export class MaterielsModule { }
