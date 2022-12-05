import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { IndexComponent } from './features/index/index.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { LoginadminComponent } from './core/auth/components/loginadmin/loginadmin.component';
import { LoginproviderComponent } from './core/auth/components/loginprovider/loginprovider.component';
//import { PublicModule } from './features/public/public.module';
//import { AuthModule } from './core/auth/auth.module';

import { AdminModule } from './features/admin/admin.module';
import { ProviderModule } from './features/provider/provider.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    ContactComponent,
    LoginadminComponent,
    LoginproviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //PublicModule,
    //AuthModule,
    AdminModule,
    ProviderModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
