import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { PizzaMenuCardContent } from '@app-shared/models/general.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, switchMap } from 'rxjs/operators';

const PRODUCTS = [
  'sizes',
  'sauce',
  'cheese',
  'toppings',
  'drinks',
  'salads',
  'appetizer',
  'desserts',
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public getPizzasList(): Observable<PizzaMenuCardContent[]> {
    return this.firestore.collection('pizzas').valueChanges().pipe(
      switchMap(pizzas => of(pizzas as PizzaMenuCardContent[]))
    );
  }

  public getProductsCatalog(): Observable<any> { // TODO TYPE THIS
    const products = PRODUCTS.map((product) => this.firestore.collection('catalog').doc('product').collection(product).valueChanges());
    return combineLatest(products).pipe(
      map(([sizes, sauce, cheese, toppings, drinks, salads, appetizers, desserts]) => {
        return { sizes, sauce, cheese, toppings, drinks, salads, appetizers, desserts };
      }),
    );
  }

  constructor(private firestore: AngularFirestore) { }

}
