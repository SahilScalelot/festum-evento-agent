import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./main/auth/auth-guard/auth.guard";
import { ContentComponent } from "./main/content/content.component";
import { NoAuthGuard } from "./main/auth/auth-guard/noAuth.guard";
import { AuthComponent } from "./main/auth/auth.component";
import { ProfileComponent } from './main/content/profile/profile.component';
import { OrganizersComponent } from './main/content/organizers/organizers.component';

const routes: Routes = [

  { path: '', redirectTo: 'login' },
  {
    path: '',
    canActivate: [NoAuthGuard],
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../app/main/auth/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../app/main/auth/register/register.module').then(m => m.RegisterModule)
      },
      {
        path: 'otp',
        loadChildren: () => import('../app/main/auth/otp/otp.module').then(m => m.OtpModule)
      },
      {
        path: 'forgot-password',
        loadChildren: () => import('../app/main/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
      },
      {
        path: 'set-new-password',
        loadChildren: () => import('../app/main/auth/set-new-password/set-new-password.module').then(m => m.SetNewPasswordModule)
      }
    ]
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: ContentComponent,
    children: [
      {
        path: 'organizers',
        loadChildren: () => import('../app/main/content/organizers/organizers.module').then(m => m.OrganizersModule)
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
  { path: '**', redirectTo: '/organizers' },
];
// , { useHash: true }
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
