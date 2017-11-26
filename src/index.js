import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
// Component
import App from './components/App';


    /**
     * @param { url path } string
     *     - First it will reading data from
     *          that url
     *      - then.. if the data is err, component won't mounting
     */
    // debugger
    axios.get('/api/contest')
    .then(resp => {
        ReactDom.render(
            <App initialContest={resp.data.data} />,
            document.getElementById('root')
        );
    })
    .catch(err => console.log(err))
