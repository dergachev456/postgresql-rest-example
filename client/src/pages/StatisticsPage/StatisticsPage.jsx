import React from 'react'
import { CustomLink } from '../../components/CustomLink/CustomLink'
import StatisticsTable from '../../components/StatisticsTable/StatisticsTable'
import './StatisticsPage.scss'
export const StatisticsPage = () => {
    return (
        <div className='statistics-page__wrapper'>
            <div className='statistics-page'>
                <CustomLink path='/' className='statistics-page__back'>Go back</CustomLink>
                <StatisticsTable className="statistics-page__table" />
            </div>
        </div>
    )
}
