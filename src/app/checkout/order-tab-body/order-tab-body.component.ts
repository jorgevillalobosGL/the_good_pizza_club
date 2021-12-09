import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { filter, switchMap, withLatestFrom } from 'rxjs/operators';
import { ShoppingCardItem } from '../../shared/models/general.model';
import { setShoppingCard } from '../../store/app.actions';
import { AppState, selectShoppingCard } from '../../store/app.reducer';

@Component({
  selector: 'app-order-tab-body',
  templateUrl: './order-tab-body.component.html',
  styleUrls: ['./order-tab-body.component.scss']
})
export class OrderTabBodyComponent implements OnInit, OnDestroy {

  public shoppingCart$ = this.appStore.pipe(
    select(selectShoppingCard),
  );

  public subjectShoppingCart$: BehaviorSubject<ShoppingCardItem | null> = new BehaviorSubject<ShoppingCardItem | null>(null);

  public updatedShoppintCard$ = this.subjectShoppingCart$.pipe(
    withLatestFrom(this.shoppingCart$),
    switchMap(([product, shoppingCart]) => {
      const newShoppingCard = shoppingCart.map(p => p.item.id === product?.item.id ? product : p);
      return of(newShoppingCard);
    }),
  );

  private onDestroy$: Subject<boolean> = new Subject();

  public onQuantity(product: ShoppingCardItem, quantity: number): void {
    const _quantity = product.quantity + quantity;
    this.subjectShoppingCart$.next({ ...product, quantity: (_quantity > 0) ? _quantity : 0 });
  }

  private subscribeUpdatedShoppintCard(): void {
    this.updatedShoppintCard$.pipe(
      filter(shoppingCard => !!shoppingCard && shoppingCard.length > 0),
    ).subscribe(shoppingCard => this.appStore.dispatch(setShoppingCard({ payload: shoppingCard })));
  }

  public ngOnInit(): void {
    this.subscribeUpdatedShoppintCard();
  }

  public ngOnDestroy(): void {
    this.subjectShoppingCart$.complete();
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }

  constructor(
    private appStore: Store<AppState>
  ) { }

}
