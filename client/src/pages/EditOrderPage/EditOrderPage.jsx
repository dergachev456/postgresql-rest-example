import React from 'react'
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { CustomLink } from '../../components/CustomLink/CustomLink';
import OrderForm from '../../components/OrderForm/OrderForm';
import './EditOrderPage.scss'
import { connect } from 'react-redux';
import { editOrder } from '../../store/actions/orderActionsCreator';

const EditOrderPage = ({ editOrder, history, match,
    main: { orderName, orderPhoneNumber, orderAddress, orderStatus, orderIdError } }) => {
    function edit() {
        if (orderStatus === 'confirmed' && (!orderName || !orderPhoneNumber || !orderAddress)) {
            window.alert('Fill in all fields please')
        } else {
            editOrder(match.params.id, orderName, orderPhoneNumber, orderAddress, orderStatus)
            history.push('/');
        }
    }
    const content = (
        <>
            <OrderForm editedOrderId={match.params.id} />
            <div className="edit-order-page__buttons">
                <CustomButton onClick={edit} className="edit-order-page__confirm">Edit</CustomButton>
                <CustomLink className="edit-order-page__close" path="/">Close</CustomLink>
            </div>
        </>
    )

    const errorText = <h2 className="edit-order-page__error">There is no such order</h2>
    const resultContent = orderIdError ? errorText : content;
    
    return (
        <div className="edit-order-page">
            <h2 className="edit-order-page__title">Edit order #{match.params.id}</h2>
            {resultContent}
        </div>
    )
}

export default connect(state => ({
    main: state.main,
}), {
    editOrder
})(EditOrderPage);