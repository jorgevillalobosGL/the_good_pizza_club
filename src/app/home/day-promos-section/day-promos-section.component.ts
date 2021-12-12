import { Component } from '@angular/core';
import { Product, Promo, ShoppingCardItem } from '@app-shared/models/general.model';
import { Store } from '@ngrx/store';
import { saveShoppingCard } from '../../store/app.actions';
import { AppState } from '../../store/app.reducer';

interface DayPromo extends Promo {
  imgUrl: string;
}
@Component({
  selector: 'app-day-promos-section',
  templateUrl: './day-promos-section.component.html',
  styleUrls: ['./day-promos-section.component.scss']
})
export class DayPromosSectionComponent {
  public promos: DayPromo[] = [
    {
      id: 303,
      promoNumber: 1,
      bgColor: '#380A48',
      mainTitle: '2 x 1 Fridays',
      secondTitle: '‘LIVES & ‘SHROOMS',
      description: 'On medium size pizzas with no additional toppings.',
      price: 15,
      showDecorators: true,
      imgUrl: 'assets/images/promo-bg1.png'
    },
    {
      id: 304,
      promoNumber: 2,
      bgColor: '#284B56',
      mainTitle: '33% OFF',
      secondTitle: 'SALAME & MUSHROOMS',
      price: 19,
      imgUrl: 'assets/images/promo-bg2.png'
    },
  ]

  public onPromoCardClick(promo: DayPromo) {
    const shoppingCard: ShoppingCardItem[] = [];
    const product: Product = {
      id: promo.id,
      name: `Promo: ${promo.secondTitle}`,
      price: promo.price,
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

  constructor(
    private appStore: Store<AppState>,
  ) { }

}
