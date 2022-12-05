import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent

  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports:[
    NavComponent, 
    HeaderComponent
  ]

})
export class LayoutModule { }
