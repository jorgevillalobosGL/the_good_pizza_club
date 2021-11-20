import { createReducer, Action, createFeatureSelector, on, createSelector } from '@ngrx/store';
import { PizzaMenuCardContent, ProductsCatalog, ShoppingCardItem } from '@app-shared/models/general.model';
import * as AppActions from './app.actions';
import { User } from '../shared/general.model';

export interface AppState {
  pizzas: PizzaMenuCardContent[];
  productsCatalog: ProductsCatalog;
  shoppingCart: ShoppingCardItem[];
  user: User | null;
};

const initialState: AppState = {
  pizzas: [],
  productsCatalog: {},
  shoppingCart: [],
  user: null
};

const appReducer = createReducer(
  initialState,
  on(AppActions.fetchPizzasSuccess, (state, {payload}) => ({
    ...state,
    pizzas: payload
  })),
  on(AppActions.fetchProductsCatalogSuccess, (state, {payload}) => ({
    ...state,
    productsCatalog: payload
  })),
  on(AppActions.fetchShoppingCardSuccess, (state, {payload}) => ({
    ...state,
    shoppingCart: payload
  })),
  on(AppActions.saveShoppingCardSuccess, (state, {payload}) => ({
    ...state,
    shoppingCart: payload
  })),
  on(AppActions.clearShoppingCard, (state) => ({
    ...state,
    shoppingCart: []
  })),
  on(AppActions.loadUser, (state, {payload}) => ({
    ...state,
    user: payload
  }))
);

export  function  reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}

// Selectors
export const selectAppState = createFeatureSelector<AppState>('app');
export const selectPizzas = createSelector(
  selectAppState,
  (state: AppState) => state.pizzas
);
export const selectProductCatalog = createSelector(
  selectAppState,
  (state: AppState) => state.productsCatalog
);
export const selectShoppingCard = createSelector(
  selectAppState,
  (state: AppState) => state.shoppingCart
);
export const selectUser = createSelector(
  selectAppState,
  (state: AppState) => state.user
);
