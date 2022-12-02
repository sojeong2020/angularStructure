import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './features/index/index.component';
import { HomeComponent } from './features/home/home.component';
import { AdminloginComponent } from './features/login/adminlogin/adminlogin.component';
import { ProviderloginComponent } from './features/login/providerlogin/providerlogin.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'admin/login', component:AdminloginComponent},
  {path: 'provider/login', component:ProviderloginComponent},
  {path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)},
  {path: 'provider', loadChildren: () => import('./features/provider/provider.module').then(m => m.ProviderModule)},

  {path: '', component:IndexComponent},

  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  //{path: '**', component: NotFoundComponent} 
 ];

 @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  