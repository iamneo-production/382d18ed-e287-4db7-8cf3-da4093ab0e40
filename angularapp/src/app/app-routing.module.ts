import { NgModule } from '@angular/core';
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
import { UpdatePlanComponent } from './update-plan/update-plan.component';





import { AddonComponent } from './addon/addon.component';
import { UpdateAddonComponent } from './update-addon/update-addon.component';

import { RechargeconfirmationComponent } from './rechargeconfirmation/rechargeconfirmation.component';
import { DisplayrechargeComponent } from './displayrecharge/displayrecharge.component';
import { EditrechargeComponent } from './editrecharge/editrecharge.component';

import { AddonRechargeconfirmationComponent } from './addon-rechargeconfirmation/addon-rechargeconfirmation.component';
import {NotificationsComponent} from './notifications/notifications.component';

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
  {path: 'admin/postpaidplans', component:PostpaidplansComponent},
  {path: 'admin/update-plan/:planId', component:UpdatePlanComponent},
   {path: 'admin/addon', component:AddonComponent},
   {path: 'admin/update-addon/:id', component:UpdateAddonComponent},
  {path: 'rechargeconfirmation', component:RechargeconfirmationComponent},

  {path: 'rechargeconfirmation/:planId', component:RechargeconfirmationComponent},
  {path: 'displayrecharge',component:DisplayrechargeComponent},

  {path: 'admin/editrecharge/:id',component:EditrechargeComponent },
  {path: 'addon-rechargeconfirmation/:id',component:AddonRechargeconfirmationComponent},
  {path: 'addon-rechargeconfirmation',component:AddonRechargeconfirmationComponent},
  {path: 'notifications',component:NotificationsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }