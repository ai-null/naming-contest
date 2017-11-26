import React, { Component } from 'react';
import propTypes from 'prop-types';

/**
 * 
 * @param {*json array-object} contest
 *      - take one parameter, and returning inside here 
 */
class ContestPreview extends Component {

    handleClick = () => {
        this.props.onClick(this.props.id)        
    }
    
    render() {
        return (
            <div className="link contestPreview container" onClick={this.handleClick}>
                {/**
                 * the data will be take from COntestList {...contest}
                 */}
                <div className="categoryName">
                    { this.props.categoryName }
                </div>
                <div className="contestName">
                    { this.props.contestName }
                </div>
            </div>
        )
    }
}

ContestPreview.propTypes = {
    id: propTypes.number.isRequired,
    categoryName: propTypes.string.isRequired,
    contestName: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,    
}

module.exports = ContestPreview;