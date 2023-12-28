import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../config';
import bodyParser from 'body-parser';
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
            categoryName: 1,
            contestName: 1
        })
        .each((err, contest) => {
            assert.equal(null, err);

            if (!contest) {
                res.send({data: contests});
                return
            }

            contests[contest._id] = contest;
        })
});

Router.get('/names/:nameIds', (req, res) => {
    /**
     * Uncomment this if you wanna look
     * "what if i dont have a names on the state"
     * App.js - line 97
     */
    // setTimeout(() => {
        const nameIds = req.params['nameIds'].split(',').map(ObjectID)
        let names = {}
    
        mdb.collection('names').find({_id: { $in: nameIds}})
            .each((err, name) => {
                assert.equal(null, err);
    
                if(!name) {
                    res.send({ names: names })
                    return;
                }
                names[name._id] = name;
            })
    // }, 2000);
});

Router.get('/contest/:contestId', (req, res) => {
    mdb.collection('contests')
        .findOne({ _id: ObjectID(req.params.contestId) })
        .then(contest => res.send(contest))
        .catch(err => console.log(err))
});

Router.post('/names', (req, res) => {
    const contestId = ObjectID(req.body['contestId']);
    const name = req.body.newName;

    mdb.collection('names').insertOne({ name }).then(result => 
        mdb.collection('contests').findAndModify(
            { _id: contestId },
            [],
            { $push: { nameIds: result.insertedId } },
            { new: true }
        ).then(doc => {
            res.send({
                updatedContest: doc.value,
                newName: { _id: result.insertedId, name }
            })
        })
    )
    .catch(err => {
        console.error(err)
        res.status(404, ' Sorry can\'t find that ')
    })
});

export default Router;
