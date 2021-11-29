import { createAction, props } from '@ngrx/store';
import { Address, CreditCard } from '@app-shared/models/general.model';

export enum Types {
  LOAD_ADDRESSES = '[checkout] load address',
  LOAD_ADDRESSES_SUCCESS = '[checkout] load address success',
  CREATE_ADDRESSES = '[checkout] create addresses',
  CREATE_ADDRESSES_SUCCESS = '[checkout] create addresses success',
  EDIT_ADDRESS = '[checkout] edit address',
  EDIT_ADDRESS_SUCCESS = '[checkout] edit address success',
  LOAD_CREDIT_CARD = '[checkout] load credit card',
  LOAD_CREDIT_CARD_SUCCESS = '[checkout] load credit card success',
  CREATE_CREDIT_CARD = '[checkout] create credit cards',
  CREATE_CREDIT_CARD_SUCCESS = '[checkout] create credit cards success',
  EDIT_CREDIT_CARD = '[checkout] edit credit card',
  EDIT_CREDIT_CARD_SUCCESS = '[checkout] edit credit card success',
  DELETE_CREDIT_CARD = '[checkout] delete credit card',
  DELETE_CREDIT_CARD_SUCCESS = '[checkout] delete credit card success',
}

export const loadAddresses = createAction(
  Types.LOAD_ADDRESSES
);

export const loadAddressesSuccess = createAction(
  Types.LOAD_ADDRESSES_SUCCESS,
  props<{ payload: Address[] }>()
);

export const createAddresses = createAction(
  Types.CREATE_ADDRESSES,
  props<{ payload: Address }>()
);

export const createAddressesSuccess = createAction(
  Types.CREATE_ADDRESSES_SUCCESS,
  props<{ payload: Address[] }>()
);

export const editAddresses = createAction(
  Types.EDIT_ADDRESS,
  props<{ payload: { index: number | null, address: Address }}>()
);

export const editAddressesSuccess = createAction(
  Types.EDIT_ADDRESS_SUCCESS,
  props<{ payload: Address[] }>()
);

export const loadCreditCards = createAction(
  Types.LOAD_CREDIT_CARD
);

export const loadCreditCardsSuccess = createAction(
  Types.LOAD_CREDIT_CARD_SUCCESS,
  props<{ payload: CreditCard[] }>()
);

export const createCreditCard = createAction(
  Types.CREATE_CREDIT_CARD,
  props<{ payload: CreditCard }>()
);

export const createCreditCardSuccess = createAction(
  Types.CREATE_CREDIT_CARD_SUCCESS,
  props<{ payload: CreditCard[] }>()
);

export const editCreditCard = createAction(
  Types.EDIT_CREDIT_CARD,
  props<{ payload: { index: number | null, creditCard: CreditCard }}>()
);

export const editCreditCardSuccess = createAction(
  Types.EDIT_CREDIT_CARD_SUCCESS,
  props<{ payload: CreditCard[] }>()
);

export const deleteCreditCard = createAction(
  Types.DELETE_CREDIT_CARD,
  props<{ index: number }>()
);

export const deleteCreditCardSuccess = createAction(
  Types.DELETE_CREDIT_CARD_SUCCESS,
  props<{ payload: CreditCard[] }>()
);
