import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRouterModule } from './auth.router.module';
import { AuthService } from '@app-services/auth.service';
import { UserService } from '@app-services/user.service';

// Local Modules
import { LoginModule } from './login/login.module';
import { SignInModule } from './sign-in/sign-in.module';
import { WelcomeModule } from './welcome/welcome.module';

// Store
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/auth.reducer';
import { AuthEffects } from './store/auth.effects';

// Components
import { AuthComponent } from './auth.component';
import { EffectsModule } from '@ngrx/effects';

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
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [AuthComponent],
  providers: [ AuthService, UserService ]
})
export class AuthModule { }
