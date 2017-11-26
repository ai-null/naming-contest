import express from 'express';
// same as data.contest
import { contest } from '../src/testData.json';

const Router = express.Router();
const data = contest.reduce((obj, contest) => {
                obj[contest.id] = contest;
                return obj;
            }, {})

// Returning the json array object
Router.get('/contest', (req, res) => {
    res.json({
        data: data
    });
});

export default Router;
