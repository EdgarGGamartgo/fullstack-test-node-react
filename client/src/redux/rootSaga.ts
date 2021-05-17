import { all, fork } from "redux-saga/effects";

import todoSaga from "./FoodShop/sagas"

export function* rootSaga() {
  yield all([fork(todoSaga)]);
}