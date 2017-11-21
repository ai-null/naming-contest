import express from 'express';
import nodeSass from 'node-sass-middleware';
import path from 'path';

import serverRender from './serverRender';
import config, { port, host } from './config';
import api from './api/index';
import index from './route/index';
import api from './api/index';

var app = express();

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(nodeSass({
    src: path.join(__dirname + '/sass'), 
    dest: path.join(__dirname + '/public')
}));

//Router
<<<<<<< HEAD
app.use('/', index);
/**
 * API includding data from testData.json
 */
app.use('/api', api);

app.use(express.static('public'));

app.listen(port, host,() => {
    console.log(`something happen on port ${port}`);
=======
app.use('/', index)
app.use('/api', api)

app.use(express.static('public'));

app.listen(config.port, config.host,() => {
    console.log(`something happen on port ${config.port}`);
>>>>>>> 454ae607f39fcceb2ef147695ddbbba64a37c079
});