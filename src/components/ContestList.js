import React from 'react';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';

const ContestList = ({contest, onContestClick}) => (
    <div className="container">
        {/**
            * contests from this.state = { object }
            *  - contest type should be array-object
            */}
        {contest.map(contest =>
            <ContestPreview 
                key={contest.id}
                onClick={onContestClick}
                {...contest}
            />
        )}
    </div>
)

ContestList.protoTypes = {
    contest: PropTypes.array,
    onContestClick: PropTypes.func.isRequired
}

module.exports = ContestList;