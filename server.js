import express from 'express';
import nodeSass from 'node-sass-middleware';
import path from 'path';

import config from './config';
import index from './route/index';

var app = express();

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(nodeSass({
    src: path.join(__dirname + '/sass'),
    dest: path.join(__dirname + '/public')
}));

app.use('/', index)

app.use(express.static('public'));

app.listen(config.port, () => {
    console.log(`something happen on port ${config.port}`);
});