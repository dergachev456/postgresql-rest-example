import React from 'react'
import { CustomLink } from '../CustomLink/CustomLink'
import './CustomTable.scss'
import PropTypes from 'prop-types';

//general template for orders table
export const CustomTable = ({ headers, rows, fieldsToDispay, showEditButton }) => {
    return (
        <div className="custom-table">
            <div className="custom-table__head">
                {
                    headers && headers.map(elem => (
                        <div key={elem + Math.random()} className="custom-table__head-cell">
                            <span className="custom-table__head-text">{elem}</span>
                        </div>
                    ))
                }
                {
                    showEditButton && <div className="custom-table__head-cell">
                        <span className="custom-table__head-text">Edit</span>
                    </div>
                }
            </div>
            <div className="custom-table__main">
                {
                    rows && rows.map(row => {
                        return (
                            <div className="custom-table__main-row" key={Math.random()}>
                                {
                                    fieldsToDispay && fieldsToDispay.map(field => (
                                        <div key={Math.random()} className="custom-table__main-cell">
                                            <span className="custom-table__main-text" >{row[field]}</span>
                                        </div>
                                    ))
                                }
                                {
                                    row.id && showEditButton && <div className="custom-table__main-cell">
                                        <CustomLink className='custom-table__link' path={`/orders/edit/${row.id}`}>Edit</CustomLink>
                                    </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

CustomTable.propTypes = {
    headers: PropTypes.array,
    rows: PropTypes.array,
    fieldsToDispay: PropTypes.array,
    showEditButton: PropTypes.bool.isRequired,
}

CustomTable.defaultProps = {
    headers: [],
    rows: [],
    fieldsToDispay: [],
}