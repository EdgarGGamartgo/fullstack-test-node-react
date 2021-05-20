import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchOrderFailure, fetchOrderSuccess } from "./actions";
import { FETCH_ORDER_REQUEST } from "./actionTypes";

const getOrder = (payload: any) => {
  return axios.post<any>(`http://localhost:3001/api/order`, payload.payload)
}

function* fetchOrderSaga(payload: any) {
  try {
    //@ts-ignore
    const response = yield call(getOrder, payload);
    yield put(
      fetchOrderSuccess({
        data: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchOrderFailure({
        error: e.message,
      })
    );
  }
}

function* orderSaga() {
  yield all([takeLatest(FETCH_ORDER_REQUEST, fetchOrderSaga)]);
}

export default orderSaga;