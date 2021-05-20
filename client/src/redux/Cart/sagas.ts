import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchCartFailure, fetchCartSuccess } from "./actions";
import { FETCH_CART_REQUEST } from "./actionTypes";

const getCart = ({ productIds }: any) => {
  var ids: any = {};
  productIds.forEach(function(i: number) { ids[i] = (ids[i]||0) + 1;});
  const queryData: any = Object.entries(ids);
  return axios.get<any>(`http://localhost:3001/api/products/cart?${queryData.map((id: number[]) => `${id[0]}=${id[1]}`).join('&')}`);
}


function* fetchCartSaga(payload: any) {
  try {
    //@ts-ignore
    const response = yield call(getCart, payload);
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


function* cartSaga() {
  yield all([takeLatest(FETCH_CART_REQUEST, fetchCartSaga)]);
}

export default cartSaga;