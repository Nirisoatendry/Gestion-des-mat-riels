import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AuthComponent,

  ],
  imports: [
    CommonModule,
    MatSliderModule
  ]
})
export class AuthModule { }
