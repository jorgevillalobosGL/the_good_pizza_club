import { createReducer, Action, createFeatureSelector, on, createSelector } from '@ngrx/store';
import { PizzaMenuCardContent, Product, ProductsCatalog } from '../shared/general.model';
import * as AppActions from './app.actions';

export interface AppState {
  pizzas: PizzaMenuCardContent[];
  productsCatalog: ProductsCatalog;
  shoppingCart: Product[];
};

const initialState: AppState = {
  pizzas: [],
  productsCatalog: {},
  shoppingCart: []
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
  on(AppActions.clearShoppingCard, (state) => ({
    ...state,
    shoppingCart: []
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
