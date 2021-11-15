import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PizzaMenuCardContent } from '@app-shared/models/general.model';
import { fetchPizzas } from '../../store/app.actions';
import { AppState, selectPizzas } from '../../store/app.reducer';

@Component({
  selector: 'app-repertory',
  templateUrl: './repertory.component.html',
  styleUrls: ['./repertory.component.scss']
})
export class RepertoryComponent implements OnInit{

  public pizzasList$: Observable<PizzaMenuCardContent[]>;

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
