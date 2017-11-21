import express from 'express';
<<<<<<< HEAD
import data from '../src/testData'

var router = express.Router();


router.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello React',
        content: data
    })
=======
import serverRender from '../serverRender'; // Re render react

var router = express.Router();
var type = typeof serverRender;
router.get('/', (req, res) => {
    serverRender()
        .then(content =>
            res.render('index', {
                title: 'Hello React',
                content
            }))
        .catch(err => console.log(err));
>>>>>>> 454ae607f39fcceb2ef147695ddbbba64a37c079
});

module.exports = router;