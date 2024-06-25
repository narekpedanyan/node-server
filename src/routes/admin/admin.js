const path = require('path');

const rootDir = require('../../utils/path');

const express = require('express');

const router = express.Router();

router.get('/admin', (req, res, next) => {
    res.render(path.join(rootDir, 'src', 'views', 'admin.pug'));
});

module.exports = router;