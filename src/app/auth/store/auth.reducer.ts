import { createReducer, Action, createFeatureSelector, on, createSelector } from '@ngrx/store';
import { User } from '@app-shared/general.model';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: User | null;
};

const initialState: AuthState = {
  user: null
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.authorizeUser, (state, {payload}) => ({
    ...state,
    user: payload
  }))
);

export  function  reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}

// Selectors
export const selectAuthState = createFeatureSelector<AuthState>('auth');
export const selectUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);
