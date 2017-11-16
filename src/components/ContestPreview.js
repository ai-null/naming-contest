import React from 'react';

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