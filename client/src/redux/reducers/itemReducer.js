import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, GET_ITEM_BY_ID, UPDATE_ITEM } from "../actions/types";

const initialState = {
    items: [],
    item: null,
    loading: false,
}

export default function itemReducer(state=initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false,
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true,
            }
        case GET_ITEM_BY_ID:
            return {
                ...state,
                item: action.payload,
                loading: false,
            }
        case ADD_ITEM:
            return {
                ...state,
                item: action.payload,
                loading: false,
            }
        case DELETE_ITEM:
            return {
                ...state,
                item: action.payload,
                loading: false,
            }
        case UPDATE_ITEM:
            return {
                ...state,
                item: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}
