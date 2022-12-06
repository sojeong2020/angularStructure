import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { LoginproviderComponent } from './components/loginprovider/loginprovider.component';

import { LayoutModule } from 'src/app/layout/layout.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginadminComponent,
    LoginproviderComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports: [
    LoginadminComponent,
    LoginproviderComponent
  ]

})
export class AuthModule { }