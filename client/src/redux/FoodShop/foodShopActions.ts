import { 
    FETCH_FOODSHOP_REQUEST,
 } from "./foodShopTypes"
 import axios from 'axios'

export const fetchCardsListRequest = (payload: any) => {
    return {
        type: FETCH_FOODSHOP_REQUEST,
        payload
    }
}
