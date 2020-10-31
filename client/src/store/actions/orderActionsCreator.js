import {
    CREATE_ORDER,
    GET_ORDERS,
    EDIT_ORDER
} from '../constants';

import ApiService from '../../services/api-service';
const apiService = new ApiService();

export const getOrders = () => async dispatch => {
    let orders = await apiService.getData('/orders')
    dispatch({
        type: GET_ORDERS,
        orders
    })
};

export const createOrder = (id, name, phone_number, address, order_status) => async (dispatch) => {
    let body = {
        id,
        name,
        phone_number,
        address,
        order_status,
    }
    apiService.postData(body, '/orders')
    dispatch({
            type: CREATE_ORDER,
            id,
            name,
            phone_number,
            address,
            order_status
        })
};

export const editOrder = (id, name, phone_number, address, order_status) =>  async (dispatch) => {
    let body = {
        name,
        phone_number,
        address,
        order_status,
    }
    apiService.putData(body, '/orders', id)
    dispatch({
        type: EDIT_ORDER,
        id,
        name,
        phone_number,
        address,
        order_status
    })
}; 