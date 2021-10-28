import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRouterModule } from './auth.router.module';
import { AuthComponent } from './auth.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [AuthComponent, WelcomeComponent],
  imports: [
    CommonModule,
    AuthRouterModule
  ]
})
export class AuthModule { }
