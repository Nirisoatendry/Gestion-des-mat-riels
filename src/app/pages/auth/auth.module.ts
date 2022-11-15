import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatCardModule} from "@angular/material/card";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AuthComponent,

  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
