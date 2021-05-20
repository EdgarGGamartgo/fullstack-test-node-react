import {
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE,
  SET_ORDER_REQUEST
} from "./actionTypes";

const initialState: any = {
  pending: false,
  order: {},
  error: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_ORDER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_ORDER_SUCCESS:
      return {
        ...state,
        pending: false,
        order: action.payload,
        error: null,
      };
    case SET_ORDER_REQUEST:
      return {
        ...state,
        pending: false,
        order: action.payload,
        error: null,
      };
    case FETCH_ORDER_FAILURE:
      return {
        ...state,
        pending: false,
        order: {},
        error: action.payload.error,
      };
    default: return state
  }
};