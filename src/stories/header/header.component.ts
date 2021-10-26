import { Component, Input } from '@angular/core';
import { MenuItem } from '../../app/shared/general.model';

@Component({
  selector: 'sb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.scss'],
})
export default class HeaderComponent {
  @Input() menuItems: MenuItem[];
  @Input() linkActive: string;
}
