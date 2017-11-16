import React from 'react';
import ReactDom from 'react-dom';
//Component
import App from './components/App';
import data, { contest } from './testData';

ReactDom.render(
    <App contest={contest} />,
    document.getElementById('root')
);