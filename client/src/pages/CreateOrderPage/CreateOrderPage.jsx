import React from 'react'
import { connect } from 'react-redux';
import { CustomButton } from '../../components/CustomButton/CustomButton'
import { CustomLink } from '../../components/CustomLink/CustomLink'
import OrderForm from '../../components/OrderForm/OrderForm'
import { getRandonId } from '../../helpers'
import './CreateOrderPage.scss'
import { createOrder } from '../../store/actions/orderActionsCreator';
import { handleValidationError } from '../../store/actions/mainActionsCreator';

const CreateOrderPage = ({ createOrder, handleValidationError, history,
    main: { orderName, orderPhoneNumber, orderAddress, orderStatus, validationError } }) => {
    function create() {
        if (orderStatus === 'confirmed' && (!orderName || !orderPhoneNumber || !orderAddress)) {
            handleValidationError(true);
            setTimeout(() => {
                handleValidationError(false);
            }, 2000);
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
            {
                validationError && <span className="validation-error">All fields are required</span>
            }
        </div>
    )
}

export default connect(state => ({
    main: state.main,
}), {
    createOrder, handleValidationError
})(CreateOrderPage);