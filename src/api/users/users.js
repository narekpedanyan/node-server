const express = require('express');
const path = require("path");
const rootDir = require("../../utils/path");
const statuses = require("../../utils/statusCodes");
const fs = require("fs");
const router = express.Router();

const users = path.join(rootDir, 'db', 'users.json');
const dbPath = path.join(rootDir, 'db');
router.get('/users', (req, res, next) => {
    if (!users) {
        res.send({
            data: [],
            total: 0,
        });
    }
    fs.readFile(users, 'utf8', (err, data) => {
        if (err) {
            const { code } = statuses.internalServerError;
            return res.status(code).send(statuses.internalServerError);
        }
        try {
            const jsonData = JSON.parse(data);
            const response = {
                data: jsonData,
                total: jsonData.length,
            };
            res.send(response);
        } catch (err) {
            const { code } = statuses.errorParsingJson;
            res.status(code).send(statuses.errorParsingJson);
        }
    });
});

router.post('/users', (req, res, next) => {
    if (!req.body.name || !req.body.age) {
        const { code } = statuses.badRequest;
        return res.status(code).send(statuses.badRequest);
    }
    fs.readFile(users, 'utf8', (err, data) => {
        if (err) {
            const { code } = statuses.internalServerError;
            return res.status(code).send(statuses.internalServerError);
        }
        try {
            const jsonData = JSON.parse(data);
            const isArray = Array.isArray(jsonData);
            if (isArray) {
                const newData = [...jsonData, {
                    name: req.body.name,
                    age: req.body.age,
                }];
                const stringyfiedData = JSON.stringify(newData);
                fs.writeFile(`${dbPath}/users.json`, stringyfiedData, (err) => {
                    if (err) {
                        const { code } = statuses.errorWritingFile;
                        res.status(code).send({
                            ...statuses.errorWritingFile,
                            systemError: err,
                        });
                    } else {
                        const { code } = statuses.resourceCreated;
                        const successResponse = {
                            ...statuses.resourceCreated,
                            data: newData,
                        }
                        res.status(code).send(successResponse);
                    }
                });
            }
        } catch (err) {
            const { code } = statuses.errorParsingJson;
            res.status(code).send(statuses.errorParsingJson);
        }
    });
});

module.exports = router;