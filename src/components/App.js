import React, { Component } from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Naming Contest'
        }
    }

    render() {
        return (
            <div className="App">
                <Header Brand={this.state.brand} />
                <div className="container">
                    {this.props.contest.map(contest =>
                        <ContestPreview key={contest.id} {...contest} />
                    )}
                </div>
            </div>
        );
    }
}