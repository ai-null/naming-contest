import React from 'react';
import propTypes from 'prop-types';

/**
 * 
 * @param {brand} string
 *      - Brand name 
 */
const Header = ({Brand}) => {
    // will return the value
    return (
        <div className="navbar navbar-fixed-top bg-primary">
            <div className="navbar-brand"> { Brand } </div>
        </div>
    );
};

// Default props value
Header.defaultProps = {
    Brand: 'Naming Contest',
};

Header.propTypes = {
    Brand: propTypes.string.isRequired,
};

module.exports = Header;
