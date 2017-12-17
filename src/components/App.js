import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Contest from './Contest';
import Header from './Header';
import ContestList from './ContestList';
import * as api from '../api';

// function handlers
const pushState = (obj, url) =>
    window.history.pushState(obj, '', url)

const onPopState = handler =>
    window.onpopstate = handler;

/**
 * @returns navbar, container
 */
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.initialData
        };
    }
    
    static propTypes = {
        initialData: PropTypes.object.isRequired   
    }

    componentDidMount() {
        onPopState((evt) => {
            this.setState({
                currentContestId: (evt.state || {}).currentContestId,
                // names: null
            });
        });
    }

    componentWillUnmount() {
        onPopState(null);
    }

    /**
     * fetchContest will trigger if the contestList clicked 
     * then the url will change to /contest/{id-of-data}
     * 
     * @param {*params for id of data} fetchContest
     * @returns Parsing data of the contest
     * 
     * pushState will returning the contestId / id of data
     * 
     * fetchAPI will processing data to a new state
     */
    fetchContest = (contestId) => {
        // // debugger
        pushState(
            {currentContestId: contestId},
            `/contest/${contestId}`
        );

        api.fetchContest(contestId).then(contest => {
            this.setState({
                currentContestId: contest._id,
                contests: {
                    ...this.state.contests,
                    [contest._id]: contest
                }
            })
            // console.log(resp)
        })
    }

    addNewName = (name, updatedId) => {
        api.addName(name, updatedId).then(resp => 
            this.setState({
                contests: {
                    ...this.state.contest,
                    [resp.updatedContest._id]: resp.updatedContest
                },
                names: {
                    ...this.state.names,
                    [resp.newName._id]: resp.newName
                }
            })
        ).catch(err => console.error(err))
    }

    backToHome = () => {
        pushState(
            {currentContestId: null},
            '/'
        );

        api.backToHome().then( contests => {
            this.setState({
                currentContestId: null,
                contests
            })
        })
    }

    fetchNames = (nameIds) => {
        if (nameIds.length === 0) return;
        api.nameIds(nameIds).then(names => {
            this.setState({
                names
            })
        })
    }

    lookupNames = (nameIds) => {
        //... what if i dont have a names on the state ?
        if (!this.state.names || !this.state.names[nameIds]) {
            return {
                name: '...'
            }
        }

        return this.state.names[nameIds];
    }

    currentContest(){
        return this.state.contests[this.state.currentContestId];
    }

    pageHeader() {
        if(this.state.currentContestId) {
            return this.currentContest().categoryName;
        }
    }

    /**
     * if the fetchContest not clicked, it will return the ContestList
     * if clicked, will return Contest description
     */
    currentContent() {
        if (this.state.currentContestId) {
            return <Contest
                    backToHomeBtn={ this.backToHome }
                    fetchNameList={ this.fetchNames }
                    lookupNames={ this.lookupNames }
                    addName={ this.addNewName }
                    { ...this.currentContest() }  />
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
                <Header Brand={this.pageHeader()} />

                { this.currentContent() }
            </div>
        )
    }
}