import express from 'express';
// same as data.contest
import data, {contest} from '../src/testData';

let Router = express.Router();

// Returning the json array object
Router.get('/contest', (req, res) => {
    res.json({
        data: contest,
    });
});

export default Router;
