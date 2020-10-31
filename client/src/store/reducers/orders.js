import {
    CREATE_ORDER,
    GET_ORDERS,
    EDIT_ORDER
} from '../constants';

let ORDERS = [];

const orders = (state = ORDERS, { type, id, name, phone_number, address, order_status, orders }) => {
    switch (type) {
        case GET_ORDERS:
            return orders;
        case CREATE_ORDER:
            return [
                ...state, {
                    id,
                    name,
                    phone_number,
                    address,
                    order_status
                }
            ];
        case EDIT_ORDER:
            return [...state].map(order => {
                if (order.id === +id) {
                    order.name = name;
                    order.phone_number = phone_number;
                    order.address = address;
                    order.order_status = order_status;
                }
                return order;
            })
        default:
            return state;
    }
}

export default orders;