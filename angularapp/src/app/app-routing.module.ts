import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];
=======
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PopularplansComponent } from './popularplans/popularplans.component';
import { AddonsComponent } from './addons/addons.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PrepaidplansComponent } from './prepaidplans/prepaidplans.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PostpaidplansComponent } from './postpaidplans/postpaidplans.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'}, /** If the path is empty, it will redirect to login page */
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'popularplans', component:PopularplansComponent},
  {path: 'addons', component:AddonsComponent},
  {path: 'displayuser', component:DisplayUserComponent},
  {path: 'edituser/:id', component:EditUserComponent},
  {path: 'admin/prepaidplans',component:PrepaidplansComponent},
  {path: 'admin/dashboard', component:AdminDashboardComponent},
  {path: 'admin/postpaidplans', component:PostpaidplansComponent}

  
];
>>>>>>> a7d69e140a987be0492b7aeab6302625030b45f6

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
