import React from 'react'
import { connect } from 'react-redux';
import { CustomTable } from '../CustomTable/CustomTable';
import PropTypes from 'prop-types';

const OrdersTable = ({orders}) => {
  return (
    <CustomTable
      headers={['order number', 'user name', 'phone number']}
      rows={orders}
      fieldsToDispay={['id', 'name', 'phone_number']}
      showEditButton={true}
    />
  )
}

export default connect(state => ({
  orders: state.orders,
}), null)(OrdersTable);

OrdersTable.propTypes = {
  orders: PropTypes.array.isRequired
}
