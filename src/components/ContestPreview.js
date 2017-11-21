import React from 'react';

/**
 * 
 * @param {*json array-object} contest
 *      - take one parameter, and returning inside here 
 */
const ContestPreview = (contest) => {
    return (
        <div className="contestPreview container">
<<<<<<< HEAD
            <div className="categoryName">{ contest.categoryName }</div>
            <div className="contestName">{ contest.contestName }</div>
=======
            <div className="categoryName">
                { contest.categoryName }
            </div>
            <div className="contestName">
                { contest.contestName }
            </div>
>>>>>>> 454ae607f39fcceb2ef147695ddbbba64a37c079
        </div>
    );
}

module.exports = ContestPreview;