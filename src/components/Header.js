import React from 'react';

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
}

// Default props value
Header.defaultProps = {
    Brand: 'Naming Contest',
}

module.exports = Header;