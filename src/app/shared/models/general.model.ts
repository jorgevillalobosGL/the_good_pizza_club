import { CardStates, CardTypes } from '../stories/address-credit-card/address-credit-card.component';

export interface DropdownValue {
  value: string | number;
  text?: string;
  disabled?: boolean;
}

export interface MenuItem {
  name: string;
  url: string;
  icon?: string;
}

export interface PizzaMenuCardContent {
  id?: number;
  price: number,
  title: string,
  numOfGrams: number,
  description: string,
  numOfCalories: number,
  bgColorGradientTo: string,
  cardBackgroundUrl: string,
  bgColorGradientFrom: string,
}

export interface Product {
  id?: number;
  name: string;
  price: number;
  description?: string;
  stock?: number;
}
export interface ProductsCatalog {
  sizes?: Product[];
  sauce?: Product[];
  cheese?: Product[];
  toppings?: Product[];
  drinks?: Product[];
  salads?: Product[];
  appetizers?: Product[];
  desserts?: Product[];
}

export interface ShoppingCardItem {
  item: Product;
  quantity: number;
}

export interface Address {
  name: string;
  address: string;
  phone?: string;
  isDefault: boolean;
}

export interface AddressCard extends Address{
  type: CardTypes,
  state: CardStates,
}

export interface CreditCard {
  title: string;
  content1?: string;
  content2?: string;
  isDefault: boolean;
}

export interface CreditCardData extends CreditCard{
  type: CardTypes,
  state: CardStates,
}

export interface Promo {
  id?: number,
  price: number
  bgColor: string,
  mainTitle: string,
  secondTitle: string,
  promoNumber: number,
  description?: string,
  showDecorators?: boolean,
}
