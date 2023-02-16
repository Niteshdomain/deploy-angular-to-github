import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { InvalidComponent } from './invalid/invalid.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotComponent } from './forgot/forgot.component';
import { VerifyComponent } from './verify/verify.component';
import { PatientApproveComponent } from './patient-approve/patient-approve.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:LandingComponent
    
  },
  {
    path: 'login',
    component: LoginComponent
  },
 
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add',
    component: PatientAddComponent
  },
  {
    path: 'edit',
    component: PatientEditComponent
  },
  {
    path:'signup',
    component:SignUpComponent

  },
  {
    path:'forgot',
    component:ForgotComponent
  },
  {
    path:'verify',
    component:VerifyComponent
  },
  {
    path:'approve',
    component:PatientApproveComponent
  },
  {
    path:'**',
    component:InvalidComponent
  },
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
