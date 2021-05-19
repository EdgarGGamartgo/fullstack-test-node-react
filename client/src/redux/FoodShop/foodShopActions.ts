import { 
    FETCH_FOODSHOP_REQUEST,
    FETCH_FOODSHOP_UPDATE
 } from "./foodShopTypes"

export const addProductToCart = (payload: any) => {
    return {
        type: FETCH_FOODSHOP_REQUEST,
        payload
    }
}

export const updateProductToCart = (payload: any) => {
    return {
        type: FETCH_FOODSHOP_UPDATE,
        payload
    }
}
