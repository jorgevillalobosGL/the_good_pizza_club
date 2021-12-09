import { Component, EventEmitter, Input, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { from } from 'rxjs';
import { reduce, switchMap } from 'rxjs/operators';
import { AppState, selectShoppingCard } from '../../store/app.reducer';

@Component({
  selector: 'app-billing-summary',
  templateUrl: './billing-summary.component.html',
  styleUrls: ['./billing-summary.component.scss']
})
export class BillingSummaryComponent {

  @Output() nextStepClick = new EventEmitter<Event>();
  @Input() hideNextBtn: boolean = false;

  public shoppingCart$ = this.appStore.pipe(
    select(selectShoppingCard),
  );

  constructor(private appStore: Store<AppState>) { }

}
