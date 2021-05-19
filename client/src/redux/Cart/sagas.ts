import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchCartFailure, fetchCartSuccess } from "./actions";
import { FETCH_CART_REQUEST } from "./actionTypes";

const getCart = ({ productIds }: any) => {
  var ids: any = {};
  productIds.forEach(function(i: number) { ids[i] = (ids[i]||0) + 1;});
  console.log(ids);
  const queryData: any = Object.entries(ids);
  console.log('queryData',queryData,queryData.map((id: number[]) => `${id[0]}=${id[1]}`).join('&'));
  return axios.get<any>(`http://localhost:3001/api/products/cart?${queryData.map((id: number[]) => `${id[0]}=${id[1]}`).join('&')}`);
}

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchCartSaga(payload: any) {
  console.log('SAGAS: ', payload)
  try {
    //@ts-ignore
    const response = yield call(getCart, payload);
  console.log('SAGASIII: ', response)
    yield put(
      fetchCartSuccess({
        data: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchCartFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_CART_REQUEST` action.
  Allows concurrent increments.
*/
function* cartSaga() {
  yield all([takeLatest(FETCH_CART_REQUEST, fetchCartSaga)]);
}

export default cartSaga;