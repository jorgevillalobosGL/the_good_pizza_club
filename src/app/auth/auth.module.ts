import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRouterModule } from './auth.router.module';
import { AuthComponent } from './auth.component';
import { WelcomeComponent } from './welcome/welcome.component';
// Share
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../app/shared/shared.module';

@NgModule({
  declarations: [
    AuthComponent,
    WelcomeComponent,
    LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRouterModule
  ]
})
export class AuthModule { }
