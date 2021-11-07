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

export interface User {
  name: string;
  email: string;
}

export interface PizzaMenuCardContent {
  bgColorGradientFrom: string,
  bgColorGradientTo: string,
  title: string,
  numOfGrams: number,
  numOfCalories: number,
  description: string,
  price: number,
  cardBackgroundUrl: string
}
