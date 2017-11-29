import express from 'express';
// same as data.contest
import { contest } from '../src/testData.json';

const Router = express.Router();
const data = contest.reduce((obj, contest) => {
                obj[contest.id] = contest;
                return obj;
            }, {});


// Every route here, have a /api before the route
// Returning the json array object
Router.get('/contest', (req, res) => {
    res.json({
        data: data
    });
});

Router.get('/contest/:contestId', (req, res) => {
    let contests = data[req.params.contestId];
    contests.description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolore iure aspernatur veritatis vel, et aut unde quae eveniet, asperiores dolorum nam beatae tempore numquam sit fugiat ad recusandae aperiam!'
    
    res.send(contests);
});

export default Router;
