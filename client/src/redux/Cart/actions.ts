import {
  FETCH_CART_REQUEST,
  FETCH_CART_FAILURE,
  FETCH_CART_SUCCESS,
} from "./actionTypes";

export const fetchCartRequest = (productIds: number[]) => ({
  type: FETCH_CART_REQUEST,
  productIds
});

export const fetchCartSuccess = (
  payload: any
): any => ({
  type: FETCH_CART_SUCCESS,
  payload,
});

export const fetchCartFailure = (
  payload: any
): any => ({
  type: FETCH_CART_FAILURE,
  payload,
});