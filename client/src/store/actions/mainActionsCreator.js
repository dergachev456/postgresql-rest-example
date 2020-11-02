import {
    HANDLE_ORDER_NAME, HANDLE_ORDER_PHONE_NUMBER, HANDLE_VALIDATION_ERROR,
    HANDLE_ORDER_ADDRESS, HANDLE_ORDER_STATUS, HANDLE_ORDERID_ERROR
} from '../constants';

export const handleOrderName = (value) => ({
    type: HANDLE_ORDER_NAME,
    payload: value 
});

export const handleOrderPhoneNumber = (value) => ({
    type: HANDLE_ORDER_PHONE_NUMBER,
    payload: value 
});

export const handleOrderAddress = (value) => ({
    type: HANDLE_ORDER_ADDRESS,
    payload: value 
});

export const handleOrderStatus = (value) => ({
    type: HANDLE_ORDER_STATUS,
    payload: value 
});

export const handleOrderIdError = (value) => ({
    type: HANDLE_ORDERID_ERROR,
    payload: value 
});


export const handleValidationError = (value) => ({
    type: HANDLE_VALIDATION_ERROR,
    payload: value 
});