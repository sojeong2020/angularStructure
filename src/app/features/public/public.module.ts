import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';

import { LayoutModule } from 'src/app/layout/layout.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    IndexComponent,
    
  ]
})
export class PublicModule { }
 