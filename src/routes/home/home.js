const path = require('path');
const fs = require('fs');
const rootDir = require('../../utils/path');
const express = require('express');
const router = express.Router();

const users = path.join(rootDir, 'db', 'users.json');
router.get('/', (req, res, next) => {
    fs.readFile(users, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data:', err);
            return res.status(500).send('Server error');
        }
        try {
            const jsonData = JSON.parse(data);
            res.render(path.join(rootDir, 'src', 'views', 'home.pug'), { users: jsonData });
        } catch (err) {
            console.error('Error parsing JSON:', err);
            res.status(500).send('Server error');
        }
    });
});

module.exports = router;