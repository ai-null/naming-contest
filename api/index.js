import express from 'express';

const Router = express.Router();

Router.get('/', (req, res) => {
    res.json({
        data: []
    });
});

export default Router;