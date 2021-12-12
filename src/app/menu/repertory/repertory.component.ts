import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PizzaMenuCardContent, Product, ShoppingCardItem } from '@app-shared/models/general.model';
import { fetchPizzas, saveShoppingCard } from '../../store/app.actions';
import { AppState, selectPizzas } from '../../store/app.reducer';

@Component({
  selector: 'app-repertory',
  templateUrl: './repertory.component.html',
  styleUrls: ['./repertory.component.scss']
})
export class RepertoryComponent implements OnInit{

  public pizzasList$: Observable<PizzaMenuCardContent[]>;

  public onPizzaClick(pizza: PizzaMenuCardContent): void {
    const shoppingCard: ShoppingCardItem[] = [];
    const product: Product = {
      id: pizza.id,
      name: `Pizza: ${pizza.title}`,
      price: pizza.price,
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

  private pizzasListSubscription() {
    this.pizzasList$ = this.appStore.pipe(
      select(selectPizzas)
    );
  }

  public ngOnInit(): void {
    this.appStore.dispatch(fetchPizzas());
    this.pizzasListSubscription();
  }

  constructor(private appStore: Store<AppState>) { }

}
