import React from 'react';
import ReactDOMServer from 'react-dom/server';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import axios from 'axios';
import config, { ServerUrl } from './config';

import App from './src/components/App';

const serverRender = () => 
    axios.get(`${ServerUrl}/api/contest`)
        .then(resp => {
            return ReactDOMServer.renderToString(
                <App initialContest={resp.data.data} />
            )
        })
=======
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
>>>>>>> 454ae607f39fcceb2ef147695ddbbba64a37c079

module.exports = serverRender;