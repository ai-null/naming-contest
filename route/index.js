import express from 'express';
import data from '../src/testData'

var router = express.Router();

import serverRender from '../serverRender';

router.get('/', (req, res) => {
    debugger
    serverRender()
        .then(content => {
            res.render('index', {
                title: 'Hello React',
                content
            })
        })
        .catch(err => console.log(err))
});

module.exports = router;