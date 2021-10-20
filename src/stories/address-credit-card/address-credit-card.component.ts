import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum CardTypes {
  'Address' = 'address',
  'Credit' = 'credit'
};

export enum CardStates {
  'NEW' = 'NEW',
  'EDIT' = 'EDIT',
  'DELETE' = 'DELETE'
};

export enum CreditCardBrand {
  'MasterCard' = 'mastercard',
  'Visa' = 'visa'
};

@Component({
  selector: 'sb-address-credit-card',
  templateUrl: './address-credit-card.component.html',
  styleUrls: ['./address-credit-card.component.scss']
})
export default class AddressCreditCardComponent {
  @Input() title: string;
  @Input() content1: string;
  @Input() content2: string;
  @Input() isDefault: boolean = false;
  @Input() type: CardTypes;
  @Input() state: CardStates = CardStates.NEW;
  @Input() creditCardBrand: CreditCardBrand = CreditCardBrand.MasterCard;

  @Output() onClick = new EventEmitter<Event>();
  @Output() onDefaultClick = new EventEmitter<Event>();

  public get footerText() : string {
    let text;
    if(this.type === CardTypes.Address) {
      text = this.isDefault ? 'Default address' : 'Make Favorite';
      text = this.state === CardStates.NEW ? 'Add new address' : text;
    } else {
      text = this.isDefault ? 'Using this card' : 'Use this card';
      text = this.state === CardStates.NEW ? 'Add payment method' : text;
    }
    return text;
  }

  constructor() { }
}
