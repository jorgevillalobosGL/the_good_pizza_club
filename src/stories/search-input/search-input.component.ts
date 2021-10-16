import { Component, Input } from '@angular/core';

@Component({
  selector: 'sb-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export default class SearchInputComponent {
  @Input() type: 'search' | 'address' = 'search';

  get iconClass() {
    return (this.type === 'search') ? 'icon-search' : 'icon-pointer';
  }
  get placeholder() {
    const searchType = (this.type === 'search') ? 'topping' : 'address';
    return `Search for specific ${searchType}`;
  }

  constructor() { }
}
