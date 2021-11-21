import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { AppState, selectShoppingCard } from '../../store/app.reducer';

@Component({
  selector: 'app-order-tab-body',
  templateUrl: './order-tab-body.component.html',
  styleUrls: ['./order-tab-body.component.scss']
})
export class OrderTabBodyComponent {

  public shoppingCart$ = this.appStore.pipe(
    select(selectShoppingCard),
  );

  constructor(private appStore: Store<AppState>) { }

}
