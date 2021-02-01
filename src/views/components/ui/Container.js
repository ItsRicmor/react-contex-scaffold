import React from 'react'
import PropTypes from 'prop-types'

export const Container = ({ children, justify = false, className = '', ...reset }) => {
    return (
        <div className={`container${justify ? ` d-flex justify-content-${justify}` : ''} ${className}`} {...reset}>
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node,
    justify: PropTypes.string,
    className: PropTypes.string
}