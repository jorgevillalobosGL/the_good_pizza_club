import { createAction, props } from '@ngrx/store';
import { User } from '@app-shared/models/user.model';

export enum Types {
  LOAD_USER = '[auth] load user',
  CREATE_USER = '[auth] createz user',
  CREATE_USER_SUCCESS = '[auth] createz user success',
  CREATE_USER_FAILURE = '[auth] createz user failure',
}

export const authorizeUser = createAction(
  Types.LOAD_USER,
  props<{ payload: User }>()
);

export const createUser = createAction(
  Types.CREATE_USER,
  props<{ user: User }>()
);

export const createUserSuccess = createAction(
  Types.CREATE_USER_SUCCESS
);

export const createUserFailure = createAction(
  Types.CREATE_USER_FAILURE
);
