import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.scss'],
})
export default class HeaderComponent {
  @Input() user: unknown = null;

  @Output() onLogin = new EventEmitter<Event>();
  @Output() onLogout = new EventEmitter<Event>();
  @Output() onCreateAccount = new EventEmitter<Event>();

  public menuItems = [
    {
      name: 'Menu',
      url: '/',
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
      url: '/login',
    },
    {
      name: 'Help',
      url: '/help',
    },
    {
      name: '',
      url: '/shopping',
      icon: 'icon-shopping'
    }
  ];
}
