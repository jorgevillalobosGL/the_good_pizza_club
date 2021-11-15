import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { distinctUntilChanged, filter, map, pluck } from 'rxjs/operators';

import { MenuItem } from './shared/general.model';
import { AuthService } from './services/auth.service';

import { AuthState } from './auth/store/auth.reducer';
import { Store } from '@ngrx/store';
import * as AuthActions from './auth/store/auth.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor() { }
}
