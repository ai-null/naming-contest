import express from 'express';
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
});

module.exports = router;