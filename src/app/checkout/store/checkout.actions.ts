import { createAction, props } from '@ngrx/store';
import { Address } from '@app-shared/models/general.model';

export enum Types {
  LOAD_ADDRESSES = '[checkout] load address',
  LOAD_ADDRESSES_SUCCESS = '[checkout] load address success',
  CREATE_ADDRESSES = '[checkout] create addresses',
  CREATE_ADDRESSES_SUCCESS = '[checkout] create addresses success',
  EDIT_ADDRESS = '[checkout] edit address',
  EDIT_ADDRESS_SUCCESS = '[checkout] edit address success',
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
