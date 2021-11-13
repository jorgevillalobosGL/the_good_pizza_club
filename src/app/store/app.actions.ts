import { createAction, props } from '@ngrx/store';
import { PizzaMenuCardContent, Product, ProductsCatalog } from '../shared/general.model';

export enum Types {
  FETCH_PIZZAS = '[core] fetch pizzas list',
  FETCH_PIZZAS_SUCCESS = '[core] fetch pizzas list success',
  FETCH_PIZZAS_FAILURE = '[core] fetch pizzas list failure',
  FETCH_PRODUCTS_CATALOG = '[core] fetch product catalog',
  FETCH_PRODUCTS_CATALOG_SUCCESS = '[core] fetch product catalog success',
  FETCH_PRODUCTS_CATALOG_FAILURE = '[core] fetch product catalog failure',
  FETCH_SHOPPING_CARD = '[core] fetch shopping card',
  FETCH_SHOPPING_CARD_SUCCESS = '[core] fetch shopping card success',
  FETCH_SHOPPING_CARD_FAILURE = '[core] fetch shopping card failure',
  SAVE_SHOPPING_CARD = '[core] save shopping card',
  SAVE_SHOPPING_CARD_SUCCESS = '[core] save shopping card success',
  SAVE_SHOPPING_CARD_FAILURE = '[core] save shopping card failure',
  CLEAR_SHOPPING_CARD = '[core] clear shopping card'
}

export const fetchPizzas = createAction(
  Types.FETCH_PIZZAS,
);

export const fetchPizzasSuccess = createAction(
  Types.FETCH_PIZZAS_SUCCESS,
  props<{ payload: PizzaMenuCardContent[] }>()
);

export const fetchProductsCatalog = createAction(
  Types.FETCH_PRODUCTS_CATALOG
);

export const fetchProductsCatalogSuccess = createAction(
  Types.FETCH_PRODUCTS_CATALOG_SUCCESS,
  props<{ payload: ProductsCatalog }>()
);

export const fetchShoppingCard = createAction(
  Types.FETCH_SHOPPING_CARD
);

export const fetchShoppingCardSuccess = createAction(
  Types.FETCH_SHOPPING_CARD_SUCCESS,
  props<{ payload: Product[] }>()
);

export const saveShoppingCard = createAction(
  Types.SAVE_SHOPPING_CARD
);

export const saveShoppingCardSuccess = createAction(
  Types.SAVE_SHOPPING_CARD_SUCCESS,
  props<{ payload: Product[] }>()
);

export const clearShoppingCard = createAction(
  Types.CLEAR_SHOPPING_CARD
);
