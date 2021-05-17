import { combineReducers } from 'redux'
import foodShopReducer from './FoodShop/foodShopReducer'

const rootReducer = combineReducers({
    foodShop: foodShopReducer
})

export default rootReducer