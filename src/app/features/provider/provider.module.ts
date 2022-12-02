import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderComponent } from './provider.component';
import { InvocingComponent } from './components/invocing/invocing.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    ProviderComponent,
    InvocingComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule
  ],
  exports:[ProviderComponent]
})
export class ProviderModule { }
