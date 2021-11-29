import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { deleteCreditCard, loadCreditCards } from '../store/checkout.actions';
import { CreditCardData } from '@app-shared/models/general.model';
import { AppState, selectUser } from '../../store/app.reducer';
import { CheckoutState, selectCreditCards } from '../store/checkout.reducer';
import { CardStates, CardTypes } from '@app-shared/stories/address-credit-card/address-credit-card.component';

@Component({
  selector: 'app-payment-tab-body',
  templateUrl: './payment-tab-body.component.html'
})
export class PaymentTabBodyComponent implements OnInit {
  public data: CreditCardData | null = null;
  public dataIndex: number | null;
  public creditCards$: Observable<CreditCardData[] | null>;
  public user$ = this.appStore.pipe(
    select(selectUser),
  );
  private modalRef?: BsModalRef;

  public openModal(template: TemplateRef<any>, creditCard?: CreditCardData, index?: number) {
    this.data = creditCard || null;
    this.dataIndex = index || null;
    this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-md' });
  }

  public onCloseModal() {
    this.modalRef?.hide();
  }

  public onDeleteCreditCard(index: number) {
    this.checkoutStore.dispatch(deleteCreditCard({
      index
    }));
  }

  private getCreditCards(): void {
    this.checkoutStore.dispatch(loadCreditCards());

    this.creditCards$ = this.checkoutStore.pipe(
      select(selectCreditCards),
      map(creditCards => {
        if (creditCards) {
          return creditCards.map(creditCard => ({
            ...creditCard,
            type: CardTypes.Credit,
            state: CardStates.DELETE,
          }));
        }
        return [];
      })
    );
  }

  ngOnInit() {
    this.getCreditCards();
  }

  constructor(
    private appStore: Store<AppState>,
    private checkoutStore: Store<CheckoutState>,
    private modalService: BsModalService
  ) { }

}
