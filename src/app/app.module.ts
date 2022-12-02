import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminloginComponent } from './features/login/adminlogin/adminlogin.component';
import { ProviderloginComponent } from './features/login/providerlogin/providerlogin.component';
import { IndexComponent } from './features/index/index.component';
import { HomeComponent } from './features/home/home.component';

import { AdminModule } from './features/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    ProviderloginComponent,
    IndexComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
