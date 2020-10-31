import React from 'react'
import './CustomLink.scss'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export const CustomLink = ({children, path, className }) => {

    return (
        <Link className={`custom-link ${className}`} to={path}>{children}</Link>
    )
}

CustomLink.propTypes = {
    path: PropTypes.string.isRequired,
}

CustomLink.defaultProps = {
    className: ''
}