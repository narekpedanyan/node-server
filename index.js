const express = require('express');
const userRoutes = require('./src/api/users/users');
const {PORT} = require("./src/utils/configs");
const configureBodyParser = require('./src/utils/bodyParserConfiguration');
const configureViewEngine = require('./src/utils/configureViewEngine');
const homeRoutes = require('./src/routes/home/home');
const adminRoutes = require('./src/routes/admin/admin');
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
configureBodyParser(app);
configureViewEngine(app);
app.use(homeRoutes);
app.use(adminRoutes);
// apis
app.use(userRoutes);
app.listen(PORT, () => {
    console.log(`Visit http://localhost:${PORT}/`);
});