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
import { PrepaidplansComponent } from './prepaidplans/prepaidplans.component';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PostpaidplansComponent } from './postpaidplans/postpaidplans.component';
import { UpdatePlanComponent } from './update-plan/update-plan.component';
import { RouterModule, Routes } from '@angular/router';
import { AddonComponent } from './addon/addon.component';

import { RechargeconfirmationComponent } from './rechargeconfirmation/rechargeconfirmation.component';

const routes: Routes = [
  { path: '', redirectTo: '/AppComponent', pathMatch: 'full' },
  

];




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddonsComponent,
    PopularplansComponent,
    DisplayUserComponent,
    EditUserComponent,
    PrepaidplansComponent,
    AdminDashboardComponent,
    PostpaidplansComponent,
    UpdatePlanComponent,
    PrepaidplansComponent,
    AddonComponent,
    RechargeconfirmationComponent,

    PrepaidplansComponent,

    AddonComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent,LoginComponent,SignupComponent,AddonsComponent,PopularplansComponent,AddonComponent]
})
export class AppModule { }