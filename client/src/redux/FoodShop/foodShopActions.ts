import { 
    FETCH_FOODSHOP_REQUEST,
 } from "./foodShopTypes"

export const addProductToCart = (payload: any) => {
    return {
        type: FETCH_FOODSHOP_REQUEST,
        payload
    }
}
