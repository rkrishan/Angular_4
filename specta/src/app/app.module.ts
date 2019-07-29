import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyMaterialModule } from  './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'/',pathMatch:'full'},
      {path:'register',component:RegistrationComponent},
      {path:'login',component:LoginComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
