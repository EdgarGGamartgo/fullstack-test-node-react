import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.cart.pending;

const getCart = (state: AppState) => state.cart.cart;

const getError = (state: AppState) => state.cart.error;

export const getCartSelector = createSelector(getCart, (data) => {
  return data
});

export const getPendingSelector = createSelector(
  getPending,
  (pending) =>{
    return pending
  }
);

export const getErrorSelector = createSelector(getError, (error) => error);