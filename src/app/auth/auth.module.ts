import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRouterModule } from './auth.router.module';

// Share
import { SharedModule } from '../../app/shared/shared.module';

// Components
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignInComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRouterModule
  ]
})
export class AuthModule { }
