import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppState, selectShoppingCard, selectUser } from '../../store/app.reducer';
import { selectAddresses, selectCreditCards } from '../store/checkout.reducer';

@Component({
  selector: 'app-checkout-tab-body',
  templateUrl: './checkout-tab-body.component.html',
  styleUrls: ['./checkout-tab-body.component.scss']
})
export class CheckoutTabBodyComponent {
  @Output() goBackStepClick = new EventEmitter<Event>();

  public user$ = this.appStore.pipe(
    select(selectUser),
  );

  public shoppingCart$ = this.appStore.pipe(
    select(selectShoppingCard),
  );

  public creditCard$ = this.appStore.pipe(
    select(selectCreditCards),
    switchMap(creditCards => of(creditCards?.find(card => card.isDefault))),
  )

  public address$ = this.appStore.pipe(
    select(selectAddresses),
    switchMap(addressess => of(addressess?.find(address => address.isDefault))),
  )

  public onPlaceOrder(): void {
    this.router.navigate(['/checkout/order-complete']);
  }

  constructor(
    private router: Router,
    private appStore: Store<AppState>,
  ) { }

}
