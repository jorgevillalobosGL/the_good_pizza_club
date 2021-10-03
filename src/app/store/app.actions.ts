import { createAction, props } from "@ngrx/store";

export enum Types {
  MY_ACTION = "[core] my action",
}

export const myAction = createAction(
  Types.MY_ACTION,
  props<{ payload: string }>()
);
