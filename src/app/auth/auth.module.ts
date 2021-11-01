import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRouterModule } from './auth.router.module';
import { AuthService } from '../services/auth.service';

// Store
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/auth.reducer';

// Share
import { SharedModule } from '../../app/shared/shared.module';

// Components
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WelcomeComponent } from './welcome/welcome.component';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';

// Components
const COMPONENTS = [
  AuthComponent,
  LoginComponent,
  SignInComponent,
  WelcomeComponent,
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    AuthRouterModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducer),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [...COMPONENTS],
  providers: [ AuthService ]
})
export class AuthModule { }
