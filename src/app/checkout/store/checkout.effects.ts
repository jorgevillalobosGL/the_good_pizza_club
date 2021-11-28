import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap, take, withLatestFrom } from 'rxjs/operators';

import { selectUser } from '../../store/app.reducer';
import { UserService } from '../../services/user.service';
import { CheckoutState, selectAddresses } from './checkout.reducer';
import {
  editAddresses,
  loadAddresses,
  createAddresses,
  loadAddressesSuccess,
  editAddressesSuccess,
  createAddressesSuccess,
} from './checkout.actions';

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

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private checkOutStore: Store<CheckoutState>
  ) { }

}
