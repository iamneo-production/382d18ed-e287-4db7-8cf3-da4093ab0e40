import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PopularplansComponent } from './popularplans/popularplans.component';
import { AddonsComponent } from './addons/addons.component';
import { DisplayUserComponent } from './display-user/display-user.component';
<<<<<<< HEAD
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PrepaidplansComponent } from './prepaidplans/prepaidplans.component';
=======
import { EditUserComponent } from './edit-user/edit-user.component';
import { PrepaidplansComponent } from './prepaidplans/prepaidplans.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
>>>>>>> f357ead066fa37f01d4b5c52ef7a7fc599bcb71a

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'}, /** If the path is empty, it will redirect to login page */
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'popularplans', component:PopularplansComponent},
  {path: 'addons', component:AddonsComponent},
  {path: 'displayuser', component:DisplayUserComponent},
<<<<<<< HEAD
  {path: 'admin/dashboard', component:AdminDashboardComponent},
  {path: 'admin/prepaidplans', component:PrepaidplansComponent},
=======
  {path: 'edituser/:id', component:EditUserComponent},
  {path: 'admin/prepaidplans',component:PrepaidplansComponent},
  {path: 'admin/dashboard', component:AdminDashboardComponent}

>>>>>>> f357ead066fa37f01d4b5c52ef7a7fc599bcb71a
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
