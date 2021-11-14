import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PizzaMenuCardContent } from '@app-shared/models/general.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public getPizzasList(): Observable<PizzaMenuCardContent[]> {
    return of([{
      bgColorGradientFrom: '#D9571F',
      bgColorGradientTo: '#F1C380',
      title: 'EGG & BASIL',
      numOfGrams: 540,
      numOfCalories: 1200,
      description: 'Our famous egg, basil, capers and black pepper. Don’t knock it ‘til you try it.',
      price: 14,
      cardBackgroundUrl: 'assets/images/egg-pizza.png'
    }, {
      bgColorGradientFrom: '#8F9F19',
      bgColorGradientTo: '#D2DA99',
      title: 'VEGGIE FEST',
      numOfGrams: 520,
      numOfCalories: 1000,
      description: 'Mushrooms, purple basil, capers and our famous secret veggie mix.',
      price: 12,
      cardBackgroundUrl: 'assets/images/veggie-pizza.png'
    },
    {
      bgColorGradientFrom: '#D91F1F',
      bgColorGradientTo: '#F1A980',
      title: 'SALAMI & TOMATO',
      numOfGrams: 560,
      numOfCalories: 1500,
      description: 'What a perfect combination of salami, tomato wedges and sage. Tastes just like home.',
      price: 16,
      cardBackgroundUrl: 'assets/images/tomato-pizza.png'
    },
    {
      bgColorGradientFrom: '#46B88F',
      bgColorGradientTo: '#D0FD88',
      title: 'PEPPERONI & EGG',
      numOfGrams: 540,
      numOfCalories: 1200,
      description: 'Our famous egg, basil, capers and black pepper. Don’t knock it ‘til you try it.',
      price: 14,
      cardBackgroundUrl: 'assets/images/pepperoni-pizza.png'
    },
    {
      bgColorGradientFrom: '#D96D1F',
      bgColorGradientTo: '#F1D180',
      title: 'SALAMI & MUSHROOMS',
      numOfGrams: 560,
      numOfCalories: 1500,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 16,
      cardBackgroundUrl: 'assets/images/mushrooms-pizza.png'
    },
    {
      bgColorGradientFrom: '#1B9F19',
      bgColorGradientTo: '#A6DA99',
      title: '‘LIVES & ‘SHROOMS',
      numOfGrams: 520,
      numOfCalories: 1000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet porttitor augue cursus viverra. Urna.',
      price: 12,
      cardBackgroundUrl: 'assets/images/lives-pizza.png'
    },
    {
      bgColorGradientFrom: '#D91F1F',
      bgColorGradientTo: '#F19B80',
      title: 'ITALIAN-TICAN',
      numOfGrams: 540,
      numOfCalories: 1200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu molestie massa odio nulla diam. At.',
      price: 14,
      cardBackgroundUrl: 'assets/images/italian-pizza.png'
    }, {
      bgColorGradientFrom: '#199F7F',
      bgColorGradientTo: '#99DAC3',
      title: 'SUPREME STYLE',
      numOfGrams: 520,
      numOfCalories: 1000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus libero vivamus nunc blandit.',
      price: 12,
      cardBackgroundUrl: 'assets/images/supreme-pizza.png'
    }]);
  }

  public getProductsCatalog(): Observable<any> { // TODO TYPE THIS
    return of({
      sizes: [
        {
          id: 100,
          name: 'small',
          price: 0.5,
          description: '7”'
        },
        {
          id: 200,
          name: 'medium',
          price: 0.5,
          description: '10”'
        },
        {
          id: 300,
          name: 'large',
          price: 0.5,
          description: '13”'
        },
      ],
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
    }
    );
  }

  constructor() { }

}
