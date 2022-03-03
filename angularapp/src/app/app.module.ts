

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddonsComponent } from './addons/addons.component';
import { PopularplansComponent } from './popularplans/popularplans.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PrepaidplansComponent } from './prepaidplans/prepaidplans.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddonsComponent,
    PopularplansComponent,
    DisplayUserComponent,
    EditUserComponent,
    AdminDashboardComponent,
    PrepaidplansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent,LoginComponent,SignupComponent,AddonsComponent,PopularplansComponent]
})
export class AppModule { }