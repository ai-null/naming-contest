import express from 'express';
import nodeSass from 'node-sass-middleware';
import path from 'path';

// import data, { contest } from './src/testData.json';
import config, { port, host, ServerUrl } from './config';
import api from './api/index';
import index from './route/index';
import serverRender from './serverRender';


var app = express();

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(nodeSass({
    src: path.join(__dirname + '/sass'), 
    dest: path.join(__dirname + '/public')
}));

//Router
// app.use('/', index)
// var router = express.Router();

app.get(['/', '/contest/:contestId'], (req, res) => {
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
        .catch(err => console.log(err))
});

app.use('/api', api)
app.use(express.static('public'));

app.listen(config.port, config.host,() => {
    console.log(`something happen on port ${config.port}`);
});