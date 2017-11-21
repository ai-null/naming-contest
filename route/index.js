import express from 'express';
import data from '../src/testData'

var router = express.Router();


router.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello React',
        content: data
    })
});

module.exports = router;