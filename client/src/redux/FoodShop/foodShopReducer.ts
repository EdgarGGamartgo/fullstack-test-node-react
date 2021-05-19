import { 
    FETCH_FOODSHOP_REQUEST,
    FETCH_FOODSHOP_UPDATE
} from "./foodShopTypes"

export const initialState = {
    productIds: []
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_FOODSHOP_REQUEST:
            return {
                ...state,
                productIds: [...state.productIds, action.payload]
            }
        case FETCH_FOODSHOP_UPDATE:
            return {
                ...state,
                productIds: action.payload
            }
        
        
        
        default: return state
    }
}

export default reducer