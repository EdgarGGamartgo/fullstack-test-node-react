import {
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_FAILURE,
  FETCH_ORDER_SUCCESS,
  SET_ORDER_REQUEST
} from "./actionTypes";


export const setOrderReq = (payload: any) => ({
  type: SET_ORDER_REQUEST,
  payload
});

export const fetchOrderRequest = (payload: any) => ({
  type: FETCH_ORDER_REQUEST,
  payload
});

export const fetchOrderSuccess = (
  payload: any
): any => ({
  type: FETCH_ORDER_SUCCESS,
  payload,
});

export const fetchOrderFailure = (
  payload: any
): any => ({
  type: FETCH_ORDER_FAILURE,
  payload,
});