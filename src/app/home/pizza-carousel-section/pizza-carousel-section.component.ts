import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { bufferCount, switchMap, toArray } from 'rxjs/operators';
import { PizzaMenuCardContent, Product, ShoppingCardItem } from '@app-shared/models/general.model';
import { select, Store } from '@ngrx/store';

import { AppState, selectPizzas } from '../../store/app.reducer';
import { fetchPizzas, saveShoppingCard } from '../../store/app.actions';

@Component({
  selector: 'app-pizza-carousel-section',
  templateUrl: './pizza-carousel-section.component.html',
  styleUrls: ['./pizza-carousel-section.component.scss']
})
export class PizzaCarouselSectionComponent implements OnInit {
  public pizzaCarouselList$: Observable<PizzaMenuCardContent[][]>;

  public onPizzaOptionClick(pizzaOption: PizzaMenuCardContent) {
    const shoppingCard: ShoppingCardItem[] = [];
    const product: Product = {
      id: pizzaOption.id,
      name: `Pizza: ${pizzaOption.title}`,
      price: pizzaOption.price,
    };
    const shoppingCardItem: ShoppingCardItem = {
      item: product,
      quantity: 1
    };
    shoppingCard.push(shoppingCardItem);
    this.appStore.dispatch(saveShoppingCard({
      payload: shoppingCard
    }));
  }

  private subscribeCarouselOptions() {
    this.pizzaCarouselList$ = this.appStore.pipe(
      select(selectPizzas),
      switchMap(pizzasList => {
        return from(pizzasList).pipe(
          bufferCount(3),
          toArray()
        );
      })
    );
  }

  ngOnInit() {
    this.appStore.dispatch(fetchPizzas());
    this.subscribeCarouselOptions();
  }

  constructor(private appStore: Store<AppState>) { }
}
