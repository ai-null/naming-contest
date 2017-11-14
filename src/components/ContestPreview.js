import React from 'react';

const ContestPreview = (contest) => {
    return (
        <div>
            <div className="categoryName">
                <p> { contest.categoryName } </p>
            </div>
            <div className="categoryName">
                <p> { contest.contestName } </p>
            </div>
        </div>
    );
}

export default ContestPreview;