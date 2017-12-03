import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config, { ServerUrl } from './config';

import App from './src/components/App';

const serverRender = () => 
    axios.get(`${ServerUrl}/api/contest`)
        .then(resp => {
            return {
                initialMarkup: ReactDOMServer.renderToString(
                    <App initialContest={resp.data.data} />,
                ),

                initialData: resp.data
            }
        })

module.exports = serverRender;