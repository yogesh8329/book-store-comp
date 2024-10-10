import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LoginComponent } from './auth/components/login/login.component';

import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { ChangePasswordComponent } from './auth/components/change-password/change-password.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path:'about-us', component: AboutUsComponent},
  { path:'how-it-works', component: HowItWorksComponent},
  { path:'auth', component: AuthComponent, children:[
    {path:'login',component:LoginComponent},
    {path:'sign-up',component:SignUpComponent},
    {path:'change-password',component:ChangePasswordComponent},
  ]}  // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Make sure RouterModule is here
  exports: [RouterModule]
})
export class AppRoutingModule { }
