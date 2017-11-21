import express from 'express';
// same as data.contest
<<<<<<< HEAD
import data, {contest} from '../src/testData';
=======
import data, { contest } from '../src/testData';
>>>>>>> 454ae607f39fcceb2ef147695ddbbba64a37c079

let Router = express.Router();

// Returning the json array object
Router.get('/contest', (req, res) => {
    res.json({
        data: contest,
    });
});

export default Router;
