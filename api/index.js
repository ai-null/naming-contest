import express from 'express';
import data, { contest } from '../src/testData';

var Router = express.Router();

Router.get('/contest', (req, res) => {
    res.json({
        data: contest
    });
});

export default Router;