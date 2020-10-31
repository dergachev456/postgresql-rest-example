import React from 'react'
import { connect } from 'react-redux';
import { CustomButton } from '../../components/CustomButton/CustomButton'
import { CustomLink } from '../../components/CustomLink/CustomLink'
import OrderForm from '../../components/OrderForm/OrderForm'
import { getRandonId } from '../../helpers'
import './CreateOrderPage.scss'
import { createOrder } from '../../store/actions/orderActionsCreator';

const CreateOrderPage = ({ createOrder, history, main: { orderName, orderPhoneNumber, orderAddress, orderStatus } }) => {
    function create() {
        if (orderStatus === 'confirmed' && (!orderName || !orderPhoneNumber || !orderAddress)) {
            window.alert('Fill in all fields please')
        } else {
            const id = getRandonId();
            createOrder(id, orderName, orderPhoneNumber, orderAddress, orderStatus)
            history.push('/');
        }
    }

    return (
        <div className="create-order-page">
            <h2 className="create-order-page__title">Create new order</h2>
            <OrderForm />
            <div className="create-order-page__buttons">
                <CustomButton onClick={create} className="create-order-page__confirm">Create</CustomButton>
                <CustomLink className="create-order-page__close" path="/">Close</CustomLink>
            </div>
        </div>
    )
}

export default connect(state => ({
    main: state.main,
}), {
    createOrder
})(CreateOrderPage);