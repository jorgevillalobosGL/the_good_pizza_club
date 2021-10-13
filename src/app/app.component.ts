import { Component } from '@angular/core';
import { DropdownValue } from '../shared/general.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theGoodPizzaClub';
  public dropdownValues: DropdownValue[] = [
    {
      value: '1',
      text: 'Item One',
      disabled: true,
    },
    {
      value: '2',
      text: 'Item Two'
    },
    {
      value: '3',
      text: 'Item Three'
    },
  ];

  onItemSelected(item: DropdownValue) {
    console.log(item);
  }
}
