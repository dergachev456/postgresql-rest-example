import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  handleOrderName, handleOrderPhoneNumber,
  handleOrderAddress, handleOrderStatus, handleOrderIdError
} from '../../store/actions/mainActionsCreator';
import './OrderForm.scss'
import ApiService from '../../services/api-service';
import { upperCaseFirstLetter } from '../../helpers'
import PropTypes from 'prop-types';

class OrderForm extends Component {
  apiService = new ApiService();

  componentDidMount() {
    const id = this.props.editedOrderId;
    const { handleOrderName, handleOrderPhoneNumber, handleOrderAddress,
      handleOrderStatus, handleOrderIdError, main } = this.props;
    if (id) {
      this.apiService.getData(`/orders/${id}`)
        .then(order => {
          if (order[0]) {
            handleOrderName(order[0].name);
            handleOrderPhoneNumber(order[0].phone_number);
            handleOrderAddress(order[0].address);
            handleOrderStatus(order[0].order_status);

          } else {
            handleOrderIdError(!main.orderIdError)
          }
        });
    } else {
      handleOrderName('')
      handleOrderPhoneNumber('')
      handleOrderAddress('')
      handleOrderStatus('');
    }
  }

  onChangeOrderName = (e) => {
    this.props.handleOrderName(e.target.value);
  }

  onChangeOrderAddress = (e) => {
    this.props.handleOrderAddress(e.target.value);
  }

  onChangeOrderPhoneNumber = (e) => {
    this.props.handleOrderPhoneNumber(e.target.value);
  }

  onChangeOrderStatus = (e) => {
    this.props.handleOrderStatus(e.target.value);
  }


  render() {
    const { main, className } = this.props;
    return (
      <form className={`order-form ${className}`} name="orderform">
        <div className="order-form__main">
          <div className="order-form__input-group">
            <label className="order-form__label">Name</label>
            <input
              name="order-name"
              type="text"
              onChange={this.onChangeOrderName}
              placeholder="Enter name"
              value={main.orderName}
            />
          </div>

          <div className="order-form__input-group">
            <label className="order-form__label">Phone number</label>
            <input
              name="order-phone-number"
              type="tel"
              onChange={this.onChangeOrderPhoneNumber}
              placeholder="Enter phone number"
              value={main.orderPhoneNumber}
            />
          </div>

          <div className="order-form__input-group">
            <label className="order-form__label">Address</label>
            <input
              name="order-address"
              type="text"
              onChange={this.onChangeOrderAddress}
              placeholder="Enter address"
              value={main.orderAddress}
            />
          </div>
        </div>

        <div className="order-form__status-container">
          <span className="order-form__status-title">Order status:</span>
          <CustomStatusInput
            onChange={this.onChangeOrderStatus}
            status="confirmed"
            editedOrderStatus={main.orderStatus}
          />
          <CustomStatusInput
            onChange={this.onChangeOrderStatus}
            status="canceled"
            editedOrderStatus={main.orderStatus}
          />
          <CustomStatusInput
            onChange={this.onChangeOrderStatus}
            status="postponed"
            editedOrderStatus={main.orderStatus}
          />
        </div>
      </form>
    )
  }
}

export default connect(state => ({
  main: state.main,
}), {
  handleOrderName, handleOrderAddress,
  handleOrderPhoneNumber, handleOrderStatus, handleOrderIdError
})(OrderForm);

OrderForm.propTypes = {
  editedOrderId: PropTypes.string,
  className: PropTypes.string,
  handleOrderAddress: PropTypes.func,
  handleOrderIdError: PropTypes.func,
  handleOrderName: PropTypes.func,
  handleOrderPhoneNumber: PropTypes.func,
  handleOrderStatus: PropTypes.func,
  main: PropTypes.object
}

OrderForm.defaultProps = {
  className: ''
}

//status radio input component
export const CustomStatusInput = ({ onChange, status, editedOrderStatus }) => {
  return (
    <label className="custom-input">
      {upperCaseFirstLetter(status)}
      <input
        name="status"
        type="radio"
        onChange={onChange}
        value={status}
        checked={status === editedOrderStatus ? true : false}
      />
      <span className="checkmark" />
    </label>
  )
}

CustomStatusInput.propTypes = {
  status: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  editedOrderStatus: PropTypes.string
}
