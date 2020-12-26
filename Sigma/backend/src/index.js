const express = require('express');

const app = express();
const port = 8080;

const expressEjsLayout = require('express-ejs-layouts');

const cookieParser = require('cookie-parser');

const path = require('path');

const [data_router, admin_router, session] = require('../routes/router');

//EJS
app.set('view engine', 'ejs');
app.use(expressEjsLayout);
//Session Initialization
app.use(
    session({
        secret: new Date().getTime().toString(),
        resave: false,
        saveUninitialized: true,
    })
);
//CookieParser
app.use(cookieParser());
//BodyParser
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/data', data_router);
app.use('/admin', admin_router);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
