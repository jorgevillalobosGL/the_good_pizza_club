import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent {
  @Output() onClick = new EventEmitter<Event>();

  constructor() { }

}
