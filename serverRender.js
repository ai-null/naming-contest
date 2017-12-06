import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config, { ServerUrl } from './config';

import App from './src/components/App';

const getApiUrl = contestId => {
    if (contestId) {
        return `${ServerUrl}/api/contest/${contestId}`;
    }

    return `${ServerUrl}/api/contest`;
}

const getInitialData = ( contestId, apiData ) => {
    if (contestId) {
        return {
            currentContestId: apiData.id,
            contests: {
                [apiData.id]: apiData
            }
        }
    }

    return {
        contests: apiData.data
    }
}

/**
 * 
 * @param {*string} contestId 
 * - the serverRender take one param, a string url
 *      and the url give it from getApiUrl function up there
 *      and will return a json object
 */
const serverRender = (contestId) => 
    axios.get(getApiUrl(contestId))
        .then(resp => {
            let initialData = getInitialData(contestId, resp.data)
            return {
                // noscript
                initialMarkup: ReactDOMServer.renderToString(
                    <App initialData={initialData} />,
                ),
                
                // JSON.stringify
                initialData
            }
        })

module.exports = serverRender;