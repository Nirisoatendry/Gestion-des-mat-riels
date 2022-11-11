import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule} from "@angular/material/card";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from "@angular/material/icon";

import { ParametresRoutingModule } from './parametres-routing.module';
import { ParametresComponent } from './parametres.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParametresComponent
  ],
  imports: [
    CommonModule,
    ParametresRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class ParametresModule { }
