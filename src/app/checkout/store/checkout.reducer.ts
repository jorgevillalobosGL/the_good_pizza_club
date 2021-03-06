import { createReducer, Action, createFeatureSelector, on, createSelector } from '@ngrx/store';
import { Address, CreditCard } from '@app-shared/models/general.model';
import * as CheckoutActions from './checkout.actions';

export interface CheckoutState {
  addresses: Address[] | null;
  creditCards: CreditCard[] | null;
};

const initialState: CheckoutState = {
  addresses: null,
  creditCards: null
};

const checkOutReducer = createReducer(
  initialState,
  on(CheckoutActions.createAddressesSuccess, (state, {payload}) => ({
    ...state,
    addresses: payload
  })),
  on(CheckoutActions.loadAddressesSuccess, (state, {payload}) => ({
    ...state,
    addresses: payload
  })),
  on(CheckoutActions.editAddressesSuccess, (state, {payload}) => ({
    ...state,
    addresses: payload
  })),
  on(CheckoutActions.createCreditCardSuccess, (state, {payload}) => ({
    ...state,
    creditCards: payload
  })),
  on(CheckoutActions.loadCreditCardsSuccess, (state, {payload}) => ({
    ...state,
    creditCards: payload
  })),
  on(CheckoutActions.editCreditCardSuccess, (state, {payload}) => ({
    ...state,
    creditCards: payload
  }))
);

export  function  reducer(state: CheckoutState | undefined, action: Action) {
  return checkOutReducer(state, action);
}

// Selectors
export const selectCheckoutState = createFeatureSelector<CheckoutState>('checkout');
export const selectAddresses = createSelector(
  selectCheckoutState,
  (state: CheckoutState) => state.addresses
);
export const selectCreditCards = createSelector(
  selectCheckoutState,
  (state: CheckoutState) => state.creditCards
);
