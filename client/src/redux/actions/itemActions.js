//Define item actions
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, GET_ITEM_BY_ID, UPDATE_ITEM } from "./types";
import axios from 'axios';

export const getItems = () => dispatch => {
    axios.get('/api/items')
        .then(response => dispatch({type: GET_ITEMS, payload: response.data}))
        .catch(error => console.log(error));
}

export const getItemById = (id) => dispatch => {
    axios.get(`/api/items/${id}`)
        .then(response => dispatch({ type: GET_ITEM_BY_ID, payload: response.data }))
        .catch(error => console.log(error.message));
}

export const addItem = (item) => dispatch => {
    axios.post('/api/items', item)
        .then(response => dispatch({ type: ADD_ITEM, payload: response.data }))
        .catch(error => console.log(error));
}

export const deleteItem = (id) => dispatch => {
    return axios.delete(`/api/items/${id}`)
        .then(response => dispatch({ type: DELETE_ITEM, payload: response.data }))
        .catch(error => console.log(error));
}

export const updateItem = (item) => dispatch => {
    axios.put(`/api/items/${item._id}`, item)
        .then(response => dispatch({ type: UPDATE_ITEM, payload: response.data }))
        .catch(error => console.log(error.message));
}
