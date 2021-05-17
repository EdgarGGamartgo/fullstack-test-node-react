import { 
    FETCH_FOODSHOP_REQUEST,
} from "./foodShopTypes"

export const initialState = {
        
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_FOODSHOP_REQUEST:
            return {
                ...state,
                ...action.payload
            }
        
        
        
        default: return state
    }
}

export default reducer