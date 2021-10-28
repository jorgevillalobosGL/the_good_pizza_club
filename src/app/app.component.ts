import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { distinctUntilChanged, filter, map, pluck } from 'rxjs/operators';

import { MenuItem } from './shared/general.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public activePathUrl$: Observable<any>;
  public menuItems: MenuItem[];

  public activePathUrlSubscription() {
    this.activePathUrl$ = this.router.events.pipe(
      filter((route: any) => !!route.url),
      pluck('url'),
      distinctUntilChanged(),
      map<string, string>(url => url?.replace('/', '')),
    );
  }

  public setMenuItems() {
    this.menuItems = [
      {
        name: 'Menu',
        url: 'home',
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
  }

  constructor(private router: Router) {}
}
