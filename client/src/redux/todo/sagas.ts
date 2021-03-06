import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchTodoFailure, fetchTodoSuccess } from "./actions";
import { FETCH_TODO_REQUEST } from "./actionTypes";

const getTodos = ({ page, size }: any) => axios.get<any>(`http://localhost:3001/api/products?page=${page}&size=${size}`);

function* fetchTodoSaga(payload: any) {
  try {
    //@ts-ignore
    const response = yield call(getTodos, payload);
    yield put(
      fetchTodoSuccess({
        data: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchTodoFailure({
        error: e.message,
      })
    );
  }
}

function* todoSaga() {
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;