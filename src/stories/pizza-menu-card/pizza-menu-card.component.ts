import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sb-pizza-menu-card',
  templateUrl: './pizza-menu-card.component.html',
  styleUrls: ['./pizza-menu-card.component.scss'],
})
export default class PizzaMenuCardComponent {
  @Input() title: string;
  @Input() numOfGrams: number;
  @Input() numOfCalories: number;
  @Input() description: string;
  @Input() price: number;
  @Input() cardBackgroundUrl: string;
  @Input() bgColorGradientFrom: string;
  @Input() bgColorGradientTo: string;

  @Output() onClick = new EventEmitter<Event>();

  get background() {
    return {
      'background-image': `url(${this.cardBackgroundUrl}),
                           radial-gradient(187.18% 90.09% at 50% 9.91%, ${this.bgColorGradientFrom} 0%, ${this.bgColorGradientTo} 100%)`,
    };
  }
  constructor() {}
}
