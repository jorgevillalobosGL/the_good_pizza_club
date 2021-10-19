import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sb-promotion-card',
  templateUrl: './promotion-card.component.html',
  styleUrls: ['./promotion-card.component.scss']
})
export default class PromotionCardComponent {
  @Input() mainTitle: string;
  @Input() secondTitle: string;
  @Input() bgColor: string;
  @Input() description: string;
  @Input() showDecorators = false;

  @Output() onClick = new EventEmitter<Event>();

  constructor() { }

}
