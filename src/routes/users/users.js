const express = require('express');
const router = express.Router();

const users = [];

router.get('/users', (req, res, next) => {
    const response = {
        data: users,
        total: users.length,
    };
    res.send(response);
});

router.post('/users', (req, res, next) => {
    if (!req.body.username) {
        res.send({
            status: 404,
            errors: 'Something went wrong!',
        });
    }
    const reqBody = {
        username: req.body.username,
        age: req.body.age,
    }
    users.push(reqBody);
});

module.exports = router;