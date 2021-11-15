import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';
import {
  fetchPizzas,
  fetchPizzasSuccess,
  fetchProductsCatalog,
  fetchProductsCatalogSuccess
} from './app.actions';

@Injectable()
export class AppEffects {

  fetchPizzas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchPizzas),
      mergeMap(() =>
        this.productsService.getPizzasList().pipe(
          map(result => fetchPizzasSuccess({ payload: result }))
        ))
    ))

  fetchProductsCatalog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchProductsCatalog),
      mergeMap(() => this.productsService.getProductsCatalog().pipe(
        map(result => fetchProductsCatalogSuccess({ payload: result }))
      ))
    ))

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) { }

}
