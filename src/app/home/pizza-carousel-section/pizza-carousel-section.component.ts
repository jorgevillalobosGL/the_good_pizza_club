import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { bufferCount, switchMap, toArray } from 'rxjs/operators';
import { PizzaMenuCardContent } from '@app-shared/models/general.model';
import { select, Store } from '@ngrx/store';

import { AppState, selectPizzas } from '../../store/app.reducer';
import { fetchPizzas } from '../../store/app.actions';

@Component({
  selector: 'app-pizza-carousel-section',
  templateUrl: './pizza-carousel-section.component.html',
  styleUrls: ['./pizza-carousel-section.component.scss']
})
export class PizzaCarouselSectionComponent implements OnInit {
  public pizzaCarouselList$: Observable<PizzaMenuCardContent[][]>;

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
