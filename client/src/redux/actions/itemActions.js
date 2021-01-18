//Define item actions
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, GET_ITEM_BY_ID, UPDATE_ITEM } from "./types";
import axios from 'axios';

export const getItems = () => dispatch => {
    axios.get('/api/items')
        .then(response => dispatch({type: GET_ITEMS, payload: response.data}))
        .catch(error => console.log(error));
}
