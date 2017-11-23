import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Header from './Header';
import ContestList from './ContestList';
import data, {contest} from '../testData';

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

    render() {
        console.log(this.state.contests)
        debugger
        return (
            <div className="App">
                <Header Brand={this.state.brand} />
                <ContestList contest={this.state.contests} />
            </div>
        )
    }
}

App.propTypes = {
    brand: PropTypes.string,
    contest: PropTypes.object
}
