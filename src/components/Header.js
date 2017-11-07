import React from 'react';

//  Navbar Components
const Header = ({Brand}) => {
    // Will return navbar
    return (
        <div className="nav navbar navbar-fixed-top bg-primary">
            <span className="navbar-brand"> {Brand} </span>
        </div>
    );
};

// Default value of brand
Header.defaultProps = {
    brand: 'Naming Contest',
};

export default Header;
