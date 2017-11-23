import React from 'react';

/**
 * 
 * @param {*json array-object} contest
 *      - take one parameter, and returning inside here 
 */
const ContestPreview = (contest) => (
    <div className="contestPreview container">
        <div className="categoryName">
            { contest.categoryName }
        </div>
        <div className="contestName">
            { contest.contestName }
        </div>
    </div>
)

module.exports = ContestPreview;