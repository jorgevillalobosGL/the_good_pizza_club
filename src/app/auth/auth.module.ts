import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRouterModule } from './auth.router.module';
import { AuthService } from '@app-services/auth.service';

// Local Modules
import { LoginModule } from './login/login.module';
import { SignInModule } from './sign-in/sign-in.module';
import { WelcomeModule } from './welcome/welcome.module';

// Store
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/auth.reducer';

// Components
import { AuthComponent } from './auth.component';

const LOCAL_MODULES = [
  LoginModule,
  SignInModule,
  WelcomeModule
];

@NgModule({
  imports: [
    ...LOCAL_MODULES,
    CommonModule,
    AuthRouterModule,
    StoreModule.forFeature('auth', reducer),
  ],
  declarations: [AuthComponent],
  providers: [ AuthService ]
})
export class AuthModule { }
