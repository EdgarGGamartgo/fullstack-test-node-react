import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.todo.pending;

const getTodos = (state: AppState) => state.todo.products;

const getError = (state: AppState) => state.todo.error;

export const getTodosSelector = createSelector(getTodos, (data) => {
  return data
});

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);