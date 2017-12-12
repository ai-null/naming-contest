import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';
// same as data.contest
// import { contest } from '../src/testData.json';

const Router = express.Router();
// const data = contest.reduce((obj, contest) => {
//                 obj[contest.id] = contest;
//                 return obj;
//             }, {});


var mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
    assert.equal(null, err)

    mdb = db;
})

Router.get('/contest', (req, res) => {
    let contests = {};

    mdb.collection('contests').find({})
        .project({
            id: 1,
            categoryName: 1,
            contestName: 1
        })
        .each((err, contest) => {
            assert.equal(null, err);

            if (!contest) {
                res.send({data: contests});
                return
            }

            contests[contest.id] = contest
        })
});

Router.get('/contest/:contestId', (req, res) => {
    mdb.collection('contests')
        .findOne({ id: parseInt(req.params.contestId) })
        .then(contest => res.send(contest))
        .catch(err => console.log(err))
});

export default Router;
