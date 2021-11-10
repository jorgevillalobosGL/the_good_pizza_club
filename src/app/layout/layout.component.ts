import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { distinctUntilChanged, filter, map, pluck } from 'rxjs/operators';

import { MenuItem } from '@app-shared/general.model';
import { AuthService } from '@app-services/auth.service';

import { AuthState } from '@app-auth/store/auth.reducer';
import { Store } from '@ngrx/store';
import * as AuthActions from '@app-auth/store/auth.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
public activePathUrl$: Observable<any>;
  public menuItems: MenuItem[];

  public activePathUrlSubscription() {
    this.activePathUrl$ = this.router.events.pipe(
      filter((route: any) => !!route.url),
      pluck('url'),
      distinctUntilChanged(),
      map<string, string>(url => `/${url?.split('/')[1]}`),
    );
  }

  public setMenuItems() {
    this.menuItems = [
      {
        name: 'Menu',
        url: '/menu',
      },
      {
        name: 'About Us',
        url: 'about-us',
      },
      {
        name: 'Contact',
        url: '/contact',
      },
      {
        name: 'Login / Sign up',
        url: '/auth',
      },
      {
        name: 'Help',
        url: '/help',
      },
      {
        name: '',
        url: '/shopping',
        icon: 'icon-shopping',
      },
    ];
  }

  ngOnInit(): void {
    this.setMenuItems();
    this.activePathUrlSubscription();
    this.initUserStateListener();
  }
  private initUserStateListener(): void {
    this.authService.initUserStateListener().subscribe(
      user => {
        if (!!user) {
          this.authStore.dispatch(
            AuthActions.authorizeUser({
              payload: {
                name: user?.displayName || '',
                email: user?.email || '',
              }
            })
          );
        }
      }
    );
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private authStore: Store<AuthState>
  ) { }
}
