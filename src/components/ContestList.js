import React from 'react';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';

const ContestList = ({contest}) => (
    <div className="container">
        {/**
            * contests from this.state = { object }
            *  - contest type should be array-object
            */}
        {contest.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
        )}
    </div>
)

ContestList.protoTypes = {
    contest: PropTypes.array
}

module.exports = ContestList;