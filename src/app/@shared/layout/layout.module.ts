import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    SidemenuComponent
  ]
})
export class LayoutModule { }
