import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValidationModule } from '../_form-validation/form-validation.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CustomPipeModule } from '../_shared/custom-pipe/custom-pipe.module';
import { FileInputModule } from '../_shared/components/file-input/file-input.module';


@NgModule({
  declarations: [
    LoginComponent, 
    ForgotPasswordComponent, 
    ResetPasswordComponent, 
    ProfileComponent, 
    ProfileUpdateComponent, 
    ChangePasswordComponent, 
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormValidationModule,
    CustomPipeModule,
    FileInputModule
  ]
})
export class AuthModule { }
