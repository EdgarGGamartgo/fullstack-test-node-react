import { all, fork } from "redux-saga/effects";

import todoSaga from "./todo/sagas";
import cart from "./Cart/sagas";
import order from "./Order/sagas";


export function* rootSaga() {
  yield all([fork(todoSaga)]);
  yield all([fork(cart)]);
  yield all([fork(order)]);
}