import express, { Router } from 'express';
import { ServerUrl } from '../config';

var app = express();
var router = Router();

import serverRender from '../serverRender';

router.get(['/', '/contest/:contestId'], (req, res) => {
    /**
     * serverRender
     * @param {*url} req.params.contestId
     * 
     * for more information look at the serverRender.js
     */

    // debugger
    // console.log(req.params.contestId)
    serverRender(req.params.contestId)
        .then(({ initialMarkup, initialData }) => {
            res.render('index', {
                title: 'Hello React',
                favicon: `/img/favicon.ico`,
                initialMarkup,
                initialData
            });
        })
        .catch(err => {
            console.log(err)
        })
});

module.exports = router;