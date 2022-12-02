import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderComponent } from './provider.component';
import { InvocingComponent } from './components/invocing/invocing.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {path:'', component: ProviderComponent,
  children: [
    {path:'invoice', component: InvocingComponent},
    {path:'list', component: ListComponent},

  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
