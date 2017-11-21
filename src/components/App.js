<<<<<<< HEAD
import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Header from './Header';
import ContestPreview from './ContestPreview';
import data, {contest} from '../testData';
=======
import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import ContestPreview from './ContestPreview'
// import data, { contest } from '../testData';
>>>>>>> 454ae607f39fcceb2ef147695ddbbba64a37c079

/**
 * @returns navbar and container
 */
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Naming Contest',
<<<<<<< HEAD
            contests: this.props.initialContest,
        };
    }

    componentDidMount() {
        /**
         * @param { url path } string
         *     - First it will reading data from
         *          that url
         *      - then.. if the data is err, component won't mounting
         */
        axios.get('/api/contest')
            .then((resp) => {
                this.setState({
                    contests: resp.data.data,
                });
                // console.log(resp.data)
            })
            .catch((err) => console.log(err));
=======
            contests: this.props.initialContest
        }
>>>>>>> 454ae607f39fcceb2ef147695ddbbba64a37c079
    }

    componentDidMount() {
        /**
         * @param { url path } string
         *     - First it will reading data from
         *          that url
         *      - then.. if the data is err, component won't mounting
         */
        axios.get('/api/contest')
            .then(resp => {
                this.setState({
                    contests: resp.data.data
                })
                // console.log(resp.data)
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="App">
                <Header Brand={this.state.brand} />
                
                <div className="container">
                    {/**
<<<<<<< HEAD
                        * contests from this.state = { object }
                        *  - contest type should be array-object
                        */}
                    {this.state.contests.map((contest) =>
=======
                     * contests from this.state = { object }
                     *  - contest type should be array-object
                     */}
                    {this.state.contests.map(contest =>
>>>>>>> 454ae607f39fcceb2ef147695ddbbba64a37c079
                        <ContestPreview key={contest.id} {...contest} />
                    )}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    brand: PropTypes.string
}
