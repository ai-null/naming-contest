import React from 'react';

/**
 * 
 * @param {*json array-object} data
 *      - take one parameter, and returning inside here 
 */
const ContestPreview = (data) => {
    return (
        <div className="contestPreview container">
            <div className="categoryName">
                { data.categoryName }
            </div>
            <div className="contestName">
                { data.contestName }
            </div>
        </div>
    );
}

module.exports = ContestPreview;