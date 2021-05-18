import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_FAILURE,
  FETCH_TODO_SUCCESS,
} from "./actionTypes";
import {
  FetchTodoRequest,
  FetchTodoSuccess,
  FetchTodoSuccessPayload,
  FetchTodoFailure,
  FetchTodoFailurePayload,
} from "./types";

export const fetchTodoRequest = (): any => ({
  type: FETCH_TODO_REQUEST,
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