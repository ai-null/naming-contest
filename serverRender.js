import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import config from './config';

import App from './src/components/App';

const serverRender = () =>
    axios.get(`${config.ServerUrl}/api/contest`)
    .then(resp => {
        return ReactDOMServer.renderToString(
            <App initialContest={resp.data.data} />
        );
        console.log(resp.data);
    })
    .catch(err => console.log(err));

module.exports = serverRender;