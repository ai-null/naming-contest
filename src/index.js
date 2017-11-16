import React from 'react';
import ReactDom from 'react-dom';
//Component
import App from './components/App';

ReactDom.render(
    <App initialContest={[]} />,
    document.getElementById('root')
);