import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import AddressCreditCard, { CardStates, CardTypes, CreditCardBrand } from './address-credit-card.component';
import IconButton from '../icon-button/icon-button.component';

export default {
  title: 'Components/AddressCreditCard',
  component: AddressCreditCard,
  decorators: [
    moduleMetadata({
      declarations: [IconButton],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<AddressCreditCard> = (args: AddressCreditCard) => ({
  props: args,
});

export const AddressEditDefault = Template.bind({});
AddressEditDefault.args = {
  title: 'Home',
  content1: '456 Bourbon Street, Ingrid Complex, #504 New Orleans, LA, 09873',
  content2: '(678) 637-3889',
  isDefault: true,
  state: CardStates.EDIT,
  type: CardTypes.Address
};

export const AddressEditNotDefault = Template.bind({});
AddressEditNotDefault.args = {
  title: 'Home',
  content1: '456 Bourbon Street, Ingrid Complex, #504 New Orleans, LA, 09873',
  content2: '(678) 637-3889',
  isDefault: false,
  state: CardStates.EDIT,
  type: CardTypes.Address
};

export const AddressAdd = Template.bind({});
AddressAdd.args = {
  title: 'Work',
  isDefault: false,
  type: CardTypes.Address
};

export const CreditCardDeleteDefault = Template.bind({});
CreditCardDeleteDefault.args = {
  isDefault: true,
  type: CardTypes.Credit,
  state: CardStates.DELETE,
  title: 'Scotiabank Debit',
  creditCardBrand: CreditCardBrand.MasterCard,
  content1: 'XXXX XXXX XXXX 4523 Name on card: Jesús Monge Expiration: 01/22 Security code: XXX',
};

export const CreditCardDeleteNotDefault = Template.bind({});
CreditCardDeleteNotDefault.args = {
  isDefault: false,
  type: CardTypes.Credit,
  title: 'Scotiabank Debit',
  state: CardStates.DELETE,
  creditCardBrand: CreditCardBrand.Visa,
  content1: 'XXXX XXXX XXXX 4523 Name on card: Jesús Monge Expiration: 01/22 Security code: XXX',
};

export const CreditCardNew = Template.bind({});
CreditCardNew.args = {
  isDefault: false,
  type: CardTypes.Credit
};
