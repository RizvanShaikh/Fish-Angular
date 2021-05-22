import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AuthGuard } from '../_guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent , data: {title: 'Login'}},
  { path: 'forgot-password', component: ForgotPasswordComponent , data: {title: 'Forgot Password'}},
  { path: 'reset-password/:token', component: ResetPasswordComponent , data: {title: 'Reset Psssword'}},
 
  { path: 'profile', component: ProfileComponent , data: {title: 'Profile'},
  canActivate: [AuthGuard],
  },
  { path: 'profile/update', component: ProfileUpdateComponent , data: {title: 'Update Profile'},
  canActivate: [AuthGuard],
},
  { path: 'change-password', component: ChangePasswordComponent , data: {title: 'Change Password'},
  canActivate: [AuthGuard],
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
