import React from 'react';
import ReactDom from 'react-dom';
// Component
import App from './components/App';

ReactDom.hydrate(
    <App initialContest={[]} />,
    document.getElementById('root')
);
