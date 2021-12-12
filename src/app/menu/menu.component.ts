import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Product, Promo, ShoppingCardItem } from '@app-shared/models/general.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { saveShoppingCard } from '../store/app.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  private modalRef?: BsModalRef;
  public promos: Promo[] = [
    {
      id: 300,
      promoNumber: 1,
      bgColor: '#284B56',
      mainTitle: '33% OFF',
      secondTitle: 'WALNUT & FRESNO CHILLI',
      price: 15
    },
    {
      id: 301,
      promoNumber: 2,
      bgColor: '#380A48',
      mainTitle: '2 x 1 Fridays',
      secondTitle: 'TOMATO & BASIL',
      description: 'On medium size pizzas with no additional toppings.',
      price: 19
    },
  ]

  public onAddPromotionToCard(promo: Promo): void {
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

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-xl' });
  }

  public onCloseModal() {
    this.modalRef?.hide();
  }

  constructor(
    private appStore: Store<AppState>,
    private modalService: BsModalService,
  ) { }

}
