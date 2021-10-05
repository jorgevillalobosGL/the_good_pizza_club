import { createReducer, Action, createFeatureSelector, on, createSelector } from '@ngrx/store';
import * as AppActions from './app.actions';

export interface AppState {
  myState: string;
};

const initialState: AppState = {
  myState: ''
};

const appReducer = createReducer(
  initialState,
  on(AppActions.myAction, (state, {payload}) => ({
    ...state,
    myState: payload
  }))
);

export  function  reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}

// Selectors
export const selectAppState = createFeatureSelector<AppState>('app');
export const selectMyState = createSelector(
  selectAppState,
  (state: AppState) => state.myState
);
