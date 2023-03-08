import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './features/public/index/index.component';
import { AboutComponent } from './features/public/about/about.component';
import { ContactComponent } from './features/public/contact/contact.component';
//import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginadminComponent } from './core/auth/components/loginadmin/loginadmin.component';
import { LoginproviderComponent } from './core/auth/components/loginprovider/loginprovider.component';

const routes: Routes = [
  {path: 'index', component:IndexComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'login/admin', component:LoginadminComponent},
  {path: 'login/provider', component:LoginproviderComponent},
  
  {path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)},
  {path: 'provider', loadChildren: () => import('./features/provider/provider.module').then(m => m.ProviderModule)},

  { path: '', redirectTo: 'index', pathMatch: 'full' },
 // {path: '**', component: PageNotFoundComponent} 
 ];

 @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
