import {
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
} from "./actionTypes";

const initialState: any = {
  pending: false,
  cart: [],
  error: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CART_REQUEST:
      console.log('action.payloada', action)

      return {
        ...state,
        pending: true,
      };
    case FETCH_CART_SUCCESS:
      console.log('action.payload', action)
      return {
        ...state,
        pending: false,
        cart: action.payload,
        error: null,
      };
    case FETCH_CART_FAILURE:
      return {
        ...state,
        pending: false,
        cart: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};