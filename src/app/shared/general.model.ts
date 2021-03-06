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
  uid?: string;
  name: string;
  email: string;
}
