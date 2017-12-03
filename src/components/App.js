import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Contest from './Contest';
import Header from './Header';
import ContestList from './ContestList';
import data, {contest} from '../testData';
import * as api from '../api';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url)

/**
 * @returns navbar and container
 */
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contests: this.props.initialContest
        };
    }
    
    /**
     * fetchContest will trigger if the url changed to 
     * /contest/{id-of-data}
     * 
     * @param {*params for id of data} fetchContest
     * @returns Parsing data of the contest
     * 
     * pushState will returning the contestId / id of data
     * 
     * fetchAPI will processing data to a new state
     */
    fetchContest = (contestId) => {
        // debugger
        pushState(
            {currentId: contestId},
            `/contest/${contestId}`
        );

        api.fetchContest(contestId).then(resp => {
            this.setState({
                brand: this.state.contests[contestId].contestName,
                currentContestId: contestId,
                contests: {
                    ...this.state.contests[contestId],
                    [resp.id]: resp
                }
            })
            // console.log(resp)
        })
    }

    currentContest(){
        return this.state.contests[this.state.currentContest];
    }

    pageHader() {
        if(this.state.currentContestId) {
            return {...this.state.contests.categoryName}
        }
    }

    /**
     * if the fetchContest doesn't clicked, this will return ContestList
     * if done, will return Contest
     */
    currentContent() {
        if (this.state.currentContestId) {
            return <Contest { ...this.state.contests[this.state.currentContestId] }  />
        }

        return <ContestList 
                contest={this.state.contests} 
                onContestClick={this.fetchContest}/>
    }

    render() {
        // console.log(this.state.contests);
        // debugger
        return (
            <div className="App">
                <Header Brand={this.state.brand} />

                { this.currentContent() }
            </div>
        )
    }
}
