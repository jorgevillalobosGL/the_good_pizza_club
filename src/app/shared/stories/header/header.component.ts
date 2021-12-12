import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '@app-shared/models/general.model';

@Component({
  selector: 'sb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.scss'],
})
export default class HeaderComponent {
  @Input() menuItems: MenuItem[];
  @Input() linkActive: string;
  @Input() count: number = 0;

  redirectTo(link: string) {
    this.router.navigate([link]);
  }

  constructor(
    private router: Router,
  ) {}
}
