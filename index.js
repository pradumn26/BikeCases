const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');

const mongoUtil = require('./util/mongoUtil');


// connecting to mongo server
mongoUtil.connectToDb()
.then(function () {
    const app = express();

    //adding middlewares
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(cookieSession({
        maxAge: 30*24*3600*1000,
        keys: ['djdnkjkdn']
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    //adding routes to it
    require('./util/passportUtil');
    require('./routes/authRoutes')(app);

    //dynamic porting
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, function () {
        console.log(`App has started on port ${PORT}`);
    })
})
.catch(function (err) {
    console.log(err);
})