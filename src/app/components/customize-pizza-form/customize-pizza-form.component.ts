import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DropdownValue } from '../../shared/general.model';

enum Products {
  sauce = 'sauce',
  cheese = 'cheese',
  toppings = 'toppings',
  drinks = 'drinks',
  salads = 'salads',
  appetizers = 'appetizers',
  desserts = 'desserts',
}
@Component({
  selector: 'app-customize-pizza-form',
  templateUrl: './customize-pizza-form.component.html',
  styleUrls: ['./customize-pizza-form.component.scss']
})
export class CustomizePizzaFormComponent implements OnInit{
  lado: string;
  public customPizzaForm: FormGroup;

  public products = {
    sauce: [
      {
        id: 1,
        name: 'Tomato',
        price: 0.5
      },
      {
        id: 2,
        name: 'Alfredo',
        price: 0.5
      },
      {
        id: 3,
        name: 'Spicy Tomato',
        price: 0.5
      },
    ],
    cheese: [
      {
        id: 4,
        name: 'Mozarella',
        price: 0.5
      },
      {
        id: 5,
        name: 'L-F Mozarella',
        price: 0.5
      },
      {
        id: 6,
        name: 'Vegan',
        price: 0.5
      },
      {
        id: 7,
        name: 'Ricotta',
        price: 0.5
      },
      {
        id: 8,
        name: 'Burrata',
        price: 0.5
      }
    ],
    toppings: [
      {
        id: 9,
        name: 'Ground Beef',
        price: 0.5
      },
      {
        id: 10,
        name: 'Pepperoni',
        price: 0.5
      },
      {
        id: 11,
        name: 'Salami',
        price: 0.5
      },
      {
        id: 12,
        name: 'Prosciutto',
        price: 0.5
      },
      {
        id: 13,
        name: 'Mushrooms',
        price: 0.5
      },
    ],
    drinks: [
      {
        id: 14,
        name: 'Coke',
        price: 0.5
      },
      {
        id: 15,
        name: 'Lemon',
        price: 0.5
      },
    ],
    salads: [
      {
        id: 16,
        name: 'Green',
        price: 0.5
      },
      {
        id: 17,
        name: 'Cessar',
        price: 0.5
      },
    ],
    appetizers: [
      {
        id: 18,
        name: 'Small Onion Rings',
        price: 0.5
      },
      {
        id: 19,
        name: 'Big Onion Rings',
        price: 0.5
      },
    ],
    desserts: [
      {
        id: 20,
        name: 'Dessert 1',
        price: 0.5
      },
      {
        id: 21,
        name: 'Dessert 2',
        price: 0.5
      },
    ]
  };

  public get sauceField(): FormControl {
    return this.customPizzaForm.get('sauce') as FormControl;
  }

  public get cheeseField(): FormControl {
    return this.customPizzaForm.get('cheese') as FormControl;
  }

  public get toppingField(): FormControl {
    return this.customPizzaForm.get('topping') as FormControl;
  }

  public getDdValues(productList: any[]): DropdownValue[] {
    return productList.map(product => ({
      value: product.id,
      text: product.name,
      disabled: false
    }));
  }

  public getDdnumber(quantity: number): DropdownValue[] {
    const ddValues: DropdownValue[] = [];
    for (let i = 0; i < quantity; i++) {
      ddValues.push({
        value: i + 1,
        text: `${i + 1}`,
        disabled: false
      });
    }
    return ddValues;
  }

  public onSelectProduct(category: string, product: any) {
    this.customPizzaForm.get(category)?.setValue(product.id);
  }

  public ngOnInit() {
    this.customPizzaForm = this.formBuilder.group({
      sauce: [],
      cheese: [],
      topping: [],
      drink: [],
      salad: [],
      appetizer: [],
      dessert: []
    });
  };

  constructor(
    private formBuilder: FormBuilder,
  ) { }
}
