import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, GET_ITEM_BY_ID, UPDATE_ITEM } from "../actions/types";

const initialState = {
    items: [],
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
        default:
            return state;
    }
}
