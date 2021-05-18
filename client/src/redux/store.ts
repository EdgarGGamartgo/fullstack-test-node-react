import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import logger from 'redux-logger'
import createSagaMiddleware from "redux-saga";
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from "./rootSaga";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware, logger),
    // other store enhancers if any
  ))

const persistor = persistStore(store)

// Run the saga
sagaMiddleware.run(rootSaga);


export { store, persistor }
