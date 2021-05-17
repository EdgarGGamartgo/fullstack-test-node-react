import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchCardsListRequest } from "./foodShopActions"
import { FETCH_FOODSHOP_REQUEST } from "./foodShopTypes";
//import { ITodo } from "./types";

const getTodos:any = () =>
  axios.get<any>("https://jsonplaceholder.typicode.com/todos");

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchTodoSaga() {
  try {
    //@ts-ignore
    const response:any = yield call(getTodos);
    // yield put(
    //   fetchTodoSuccess({
    //     todos: response.data,
    //   })
    // );
  } catch (e) {
    // yield put(
    //   fetchTodoFailure({
    //     error: e.message,
    //   })
    // );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* todoSaga() {
  yield all([takeLatest(FETCH_FOODSHOP_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;