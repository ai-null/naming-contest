import React, {Component} from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import testData from './testData';

let { contest } = testData;

console.log(contest);

ReactDom.render(
    <App contest={contest} /> ,
    document.getElementById('root')
);