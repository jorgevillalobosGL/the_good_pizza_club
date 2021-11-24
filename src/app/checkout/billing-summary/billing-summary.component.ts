import { Component, EventEmitter, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { from } from 'rxjs';
import { reduce, switchMap } from 'rxjs/operators';
import { AppState, selectShoppingCard } from '../../store/app.reducer';

const SAVING_PERCENTAGE = 0.05;
const IVA = 0.13;
const EXPRESS_AMOUNT = 5;

@Component({
  selector: 'app-billing-summary',
  templateUrl: './billing-summary.component.html',
  styleUrls: ['./billing-summary.component.scss']
})
export class BillingSummaryComponent {

  @Output() nextStepClick = new EventEmitter<Event>();

  public iva = IVA;
  public expressAmount = EXPRESS_AMOUNT;

  public shoppingCart$ = this.appStore.pipe(
    select(selectShoppingCard),
  );

  public subtotal$ = this.shoppingCart$.pipe(
    switchMap(shoppingCart => from(shoppingCart).pipe(
      reduce((acc, curr) => acc + (curr.item.price * curr.quantity), 0),
    )),
  );

  public getSavings(subtotal: number): number {
    return subtotal * SAVING_PERCENTAGE;
  }

  public getTaxes(subtotal: number): number {
    return (subtotal-this.getSavings(subtotal)) * this.iva;
  }

  public getTotal(subtotal: number): number {
    return subtotal + this.getTaxes(subtotal) + this.expressAmount - this.getSavings(subtotal);
  }

  constructor(private appStore: Store<AppState>) { }

}
