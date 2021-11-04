import { createAction, props } from '@ngrx/store';
import { User } from '@app-shared/general.model';

export enum Types {
  SAVE_USER = '[auth] save user',
}

export const authorizeUser = createAction(
  Types.SAVE_USER,
  props<{ payload: User }>()
);
