import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from "redux-saga";
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from "./rootSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware, logger),
    // other store enhancers if any
  ))

// Run the saga
sagaMiddleware.run(rootSaga);

export default store