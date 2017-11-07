import config from './config';
import apiRouter from './api/index';
import express from 'express';

const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello EJs',
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
    console.log('magic happen on port: ', config.port);
});
