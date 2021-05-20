import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.order.pending;

const getOrder = (state: AppState) => state.order.order.data;

const getError = (state: AppState) => state.order.error;

export const getOrderSelector = createSelector(getOrder, (data) => {
  return data
});

export const getPendingSelector = createSelector(
  getPending,
  (pending) =>{
    return pending
  }
);

export const getErrorSelector = createSelector(getError, (error) => error);