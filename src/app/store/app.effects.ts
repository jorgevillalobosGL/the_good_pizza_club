import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, mergeMap, switchMap, take, tap, withLatestFrom } from 'rxjs/operators';

import { AppState, selectShoppingCard, selectUser } from '../store/app.reducer';
import { ProductsService } from '../services/products.service';
import { UserService } from '../services/user.service';
import {
  fetchPizzas,
  fetchPizzasSuccess,
  fetchProductsCatalog,
  fetchProductsCatalogSuccess,
  fetchShoppingCard,
  fetchShoppingCardSuccess,
  saveShoppingCard,
  saveShoppingCardSuccess,
  setShoppingCard,
} from './app.actions';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

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

  saveShoppingCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveShoppingCard),
      switchMap(({payload}) => this.appStore.pipe(
        select(selectShoppingCard),
        take(1),
        switchMap(shoppingCard => (!!shoppingCard) ? of([...shoppingCard, ...payload]) : of(payload)),
      )),
      withLatestFrom(this.appStore.pipe(select(selectUser))),
      mergeMap(([shoppingCard, user]) => {
        return this.userService.saveShoppingCard(user?.uid as string, shoppingCard).pipe(
          map(() => saveShoppingCardSuccess({ payload: shoppingCard }))
        );
      }),
      tap(() => {
        this.toastr.success('Added to Shopping card');
      }),
    )
  )

  setShoppingCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setShoppingCard),
      withLatestFrom(this.appStore.pipe(select(selectUser))),
      mergeMap(([action, user]) => {
        return this.userService.saveShoppingCard(user?.uid as string, action.payload).pipe(
          map(() => saveShoppingCardSuccess({ payload: action.payload }))
        );
      })
    )
  )

  fetchShoppingCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchShoppingCard),
      switchMap(() => this.appStore.pipe(select(selectUser))),
      mergeMap((user) =>
        this.userService.getShoppingCard(user?.uid as string).pipe(
          map(result => fetchShoppingCardSuccess({ payload: result }))
        ))
    ))

  constructor(
    private actions$: Actions,
    private toastr: ToastrService,
    private userService: UserService,
    private appStore: Store<AppState>,
    private productsService: ProductsService,
  ) { }

}
