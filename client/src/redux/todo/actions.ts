import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_FAILURE,
  FETCH_TODO_SUCCESS,
} from "./actionTypes";

export const fetchTodoRequest = (page: number, size: number) => ({
  type: FETCH_TODO_REQUEST,
  page,
  size
});

export const fetchTodoSuccess = (
  payload: any
): any => ({
  type: FETCH_TODO_SUCCESS,
  payload,
});

export const fetchTodoFailure = (
  payload: any
): any => ({
  type: FETCH_TODO_FAILURE,
  payload,
});