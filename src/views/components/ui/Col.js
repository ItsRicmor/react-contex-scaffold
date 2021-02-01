import React from 'react'
import PropTypes from 'prop-types';

export const Col = ({ children, xs, sm, md, lg, xl, xxl, className = '' }) => {

    const validateDefault = !xs && !sm && !md && !lg && !xl && !xxl
    const objectStyles = `${validateDefault ? "col" : ''}${xs ? ` col-${xs}` : ''}${sm ? ` col-sm-${sm}` : ''}${md ? ` col-md-${md}` : ''}${lg ? ` col-lg-${lg}` : ''}${xl ? ` col-xl-${xl}` : ''}${xxl ? ` col-xxl-${xxl}` : ''} ${className}`
    return (
        <div className={objectStyles}>
            {children}
        </div>
    )
}

Col.propTypes = {
    children: PropTypes.node,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    xxl: PropTypes.number,
}