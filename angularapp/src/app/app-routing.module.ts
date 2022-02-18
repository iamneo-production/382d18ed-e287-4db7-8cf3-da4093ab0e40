import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PopularplansComponent } from './popularplans/popularplans.component';
import { AddonsComponent } from './addons/addons.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'}, /** If the path is empty, it will redirect to login page */
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'popularplans', component:PopularplansComponent},
  {path: 'addons', component:AddonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }