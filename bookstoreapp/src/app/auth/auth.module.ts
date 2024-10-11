import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ChangePasswordComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
