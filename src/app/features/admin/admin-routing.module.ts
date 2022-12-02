import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManagementComponent } from './components/management/management.component';
import { SessionsComponent } from './components/sessions/sessions.component';

const routes: Routes = [
  { path:'', component: AdminComponent,
  children: [
    {path: 'management', component:ManagementComponent},
    {path: 'sessions', component:SessionsComponent},

  ]
}
]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
