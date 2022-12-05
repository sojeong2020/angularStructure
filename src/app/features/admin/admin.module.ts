import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import { ManagementComponent } from './components/management/management.component';
import { LayoutModule } from 'src/app/layout/layout.module';

@NgModule({
  declarations: [
    AdminComponent,
    SessionsComponent,
    ManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule
  ],
  exports:[AdminComponent]

})
export class AdminModule { }
