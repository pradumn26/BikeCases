const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');

const mongoUtil = require('./util/mongoUtil');

mongoUtil.connectToDb()
.then(function () {
    const app = express();

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, function () {
        console.log(`App has started on port ${PORT}`);
    })
})
.catch(function (err) {
    console.log(err);
})