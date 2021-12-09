import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap, take, withLatestFrom } from 'rxjs/operators';

import { selectUser } from '../../store/app.reducer';
import { UserService } from '../../services/user.service';
import { CheckoutState, selectAddresses, selectCreditCards } from './checkout.reducer';
import {
  editAddresses,
  loadAddresses,
  createAddresses,
  loadAddressesSuccess,
  editAddressesSuccess,
  createAddressesSuccess,
  loadCreditCards,
  createCreditCard,
  createCreditCardSuccess,
  editCreditCard,
  loadCreditCardsSuccess,
  editCreditCardSuccess,
  deleteCreditCard
} from './checkout.actions';
import { CreditCard } from '../../shared/models/general.model';

@Injectable()
export class CheckoutEffects {

  loadAddresses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAddresses),
      switchMap(() => this.checkOutStore.pipe(
        select(selectUser),
      )),
      mergeMap(user => this.userService.getAddressList(user?.uid as string).pipe(
        map(result => loadAddressesSuccess({ payload: result }))
      ))
    )
  );

  saveAddresses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createAddresses),
      switchMap(({payload}) => this.checkOutStore.pipe(
        select(selectAddresses),
        take(1),
        switchMap(addresses => (!!addresses) ? of([...addresses, payload]) : of([payload])),
      )),
      withLatestFrom(this.checkOutStore.pipe(select(selectUser))),
      mergeMap(([addresses, user]) => {
        return this.userService.saveUserAddress(user?.uid as string, addresses).pipe(
          map(() => createAddressesSuccess({ payload: addresses }))
        );
      })
    )
  )

  editAddresses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editAddresses),
      switchMap(({payload}) => this.checkOutStore.pipe(
        select(selectAddresses),
        take(1),
        switchMap(addresses => {
          let _addresses = [];
          if(!!addresses) {
            _addresses = addresses.slice(0, payload.index || 0)
              .concat(payload.address)
              .concat(addresses.slice((payload.index || 0) + 1));
          } else {
            _addresses = [payload.address];
          }
          return of(_addresses);
        }),
      )),
      withLatestFrom(this.checkOutStore.pipe(select(selectUser))),
      mergeMap(([addresses, user]) => {
        return this.userService.saveUserAddress(user?.uid as string, addresses).pipe(
          map(() => editAddressesSuccess({ payload: addresses }))
        );
      })
    )
  )

  loadCreditCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCreditCards),
      switchMap(() => this.checkOutStore.pipe(
        select(selectUser),
      )),
      mergeMap(user => this.userService.getCreditCardList(user?.uid as string).pipe(
        map(result => loadCreditCardsSuccess({ payload: result }))
      ))
    )
  );

  saveCreditCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCreditCard),
      switchMap(({payload}) => this.checkOutStore.pipe(
        select(selectCreditCards),
        take(1),
        switchMap(creditCards => (!!creditCards) ? of([...creditCards, payload]) : of([payload])),
      )),
      withLatestFrom(this.checkOutStore.pipe(select(selectUser))),
      mergeMap(([creditCard, user]) => {
        return this.userService.saveUserCreditCards(user?.uid as string, creditCard).pipe(
          map(() => createCreditCardSuccess({ payload: creditCard }))
        );
      })
    )
  )

  editCreditCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editCreditCard),
      switchMap(({payload}) => this.checkOutStore.pipe(
        select(selectCreditCards),
        take(1),
        switchMap(creditCards => {
          let _creditCard = [];
          if(!!creditCards) {
            _creditCard = creditCards.slice(0, payload.index || 0)
              .concat(payload.creditCard)
              .concat(creditCards.slice((payload.index || 0) + 1));
          } else {
            _creditCard = [payload.creditCard];
          }
          return of(_creditCard);
        }),
      )),
      withLatestFrom(this.checkOutStore.pipe(select(selectUser))),
      mergeMap(([creditCards, user]) => {
        return this.userService.saveUserCreditCards(user?.uid as string, creditCards).pipe(
          map(() => editCreditCardSuccess({ payload: creditCards }))
        );
      })
    )
  )

  deleteCreditCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCreditCard),
      switchMap(({index}) => this.checkOutStore.pipe(
        select(selectCreditCards),
        take(1),
        switchMap(creditCards => {
          let _creditCard: CreditCard[] = [];
          if(!!creditCards) {
            _creditCard = creditCards.slice(0, index || 0)
              .concat(creditCards.slice((index || 0) + 1));
          }
          return of(_creditCard);
        }),
      )),
      withLatestFrom(this.checkOutStore.pipe(select(selectUser))),
      mergeMap(([creditCards, user]) => {
        return this.userService.saveUserCreditCards(user?.uid as string, creditCards).pipe(
          map(() => editCreditCardSuccess({ payload: creditCards }))
        );
      })
    )
  )

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private checkOutStore: Store<CheckoutState>
  ) { }

}
