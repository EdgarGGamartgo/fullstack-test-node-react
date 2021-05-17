import { combineReducers } from 'redux'
import foodShopReducer from './FoodShop/foodShopReducer'
import todoReducer from "./todo/reducer";

const rootReducer = combineReducers({
    foodShop: foodShopReducer,
    todo: todoReducer,
})

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer