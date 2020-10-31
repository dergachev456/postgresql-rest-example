import React from 'react'
import { CustomLink } from '../../components/CustomLink/CustomLink'
import OrdersTable from '../../components/OrdersTable/OrdersTable'
import './OrderListPage.scss'

export const OrderListPage = () => {
    return (
        <div className='orderlist-page__wrapper'>
            <div className='orderlist-page'>
                <div className='orderlist-page__buttons'>
                    <CustomLink path='/create' className='orderlist-page__create'>Create order</CustomLink>
                    <CustomLink path='/statistics' className='orderlist-page__statistics'>Statistics</CustomLink>
                </div>
                <OrdersTable />
            </div>
        </div>

    )
}
