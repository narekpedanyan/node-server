const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/users/users');
const {PORT} = require("./src/utils/configs");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Initial page');
});
app.use(userRoutes);
app.listen(PORT, () => {
    console.log('Server is running!');
});