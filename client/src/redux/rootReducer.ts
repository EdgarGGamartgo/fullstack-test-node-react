import { combineReducers } from 'redux'
import foodShopReducer from './FoodShop/foodShopReducer'
import todoReducer from "./todo/reducer";
import cartReducer from "./Cart/reducer";

const rootReducer = combineReducers({
    foodShop: foodShopReducer,
    todo: todoReducer,
    cart: cartReducer,
})

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer