import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PizzaMenuCardContent } from '@app-shared/models/general.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public getPizzasList(): Observable<PizzaMenuCardContent[]> {
    return this.firestore.collection('pizzas').valueChanges().pipe(
      switchMap(x => of(x as PizzaMenuCardContent[]))
    );
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

  constructor(private firestore: AngularFirestore) { }

}
