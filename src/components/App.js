import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import ContestPreview from './ContestPreview'
// import data, { contest } from '../testData';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Naming Contest',
            contests: []
        }
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
                     * contests from this.state = { object }
                     *  - contest type should be array-object
                     */}
                    {this.state.contests.map(contest =>
                        <ContestPreview key={contest.id} {...contest} />
                    )}
                </div>
            </div>
        );
    }
}