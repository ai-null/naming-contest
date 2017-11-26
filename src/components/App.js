import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Contest from './Contest';
import Header from './Header';
import ContestList from './ContestList';
import data, {contest} from '../testData';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url)

/**
 * @returns navbar and container
 */
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Naming Contest',
            contests: this.props.initialContest
        };
    }

    fetchContest = (contestId) => {
        pushState(
            {currentId: contestId},
            `/contest/${contestId}`
        )
    
        this.setState({
            brand: this.state.contests[contestId].categoryName,
            currentContestId: contestId
        })
    }

    currentContest() {
        if (this.state.currentContestId) {
            return (
                <Contest {...this.state.contests[this.state.currentContestId]} />
            )
        }
        
        return <ContestList 
            contest={this.state.contests} 
            onContestClick={this.fetchContest}/>
    }

    render() {
        // console.log(this.state.contests)
        // // debugger
        return (
            <div className="App">
                <Header Brand={this.state.brand} />
                { this.currentContest() }
            </div>
        )
    }
}

App.propTypes = {
    brand: PropTypes.string,
    contest: PropTypes.object
}