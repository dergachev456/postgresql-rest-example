import React from 'react'
import './CustomButton.scss'
import PropTypes from 'prop-types';

export const CustomButton = ({ className, onClick, children }) => {
    return (
        <button
            className={`custom__button ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
CustomButton.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

CustomButton.defaultProps = {
    className: ''
}