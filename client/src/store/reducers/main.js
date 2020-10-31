import {
    HANDLE_ORDER_NAME, HANDLE_ORDER_PHONE_NUMBER,
    HANDLE_ORDER_ADDRESS, HANDLE_ORDER_STATUS, HANDLE_ORDERID_ERROR
} from '../constants';

const initialState = {
    orderName: '',
    orderPhoneNumber: '',
    orderAddress: '',
    orderStatus: '',
    orderIdError: false
};

const main = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_ORDER_NAME:
            return {
                ...state,
                orderName: action.payload
            }
        case HANDLE_ORDER_PHONE_NUMBER:
            return {
                ...state,
                orderPhoneNumber: action.payload
            }
        case HANDLE_ORDER_ADDRESS:
            return {
                ...state,
                orderAddress: action.payload
            }
        case HANDLE_ORDER_STATUS:
            return {
                ...state,
                orderStatus: action.payload
            }
        case HANDLE_ORDERID_ERROR:
            return {
                ...state,
                orderIdError: action.payload
            }
        default:
            return state;
    }
}
export default main;