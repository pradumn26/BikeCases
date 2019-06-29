const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const ObjectId = require('mongodb').ObjectId;

const db = require('./mongoUtil').getDb();

//what goes into the cookie
passport.serializeUser(function(document, done) {
    done(null, {id:document._id, authType: document.authType});
});

//converting cookie into user doc
passport.deserializeUser(function(data, done) {
    let col = data.authType == 'police-auth' ? 'police' : 'users';
    let collection = db.collection(col);

    collection.findOne({_id: ObjectId(data.id)})
        .then(function (doc) {
            doc.authType = data.authType;
            done(null, doc);
        })
        .catch(function (err) {
            done(err);
        })
});

//auth logic for police type
passport.use('police-auth', new LocalStrategy(
    {usernameField: 'email', passwordField: 'password'},
    function(email, password, done) {
        let doctorsCollection = db.collection('police');

        console.log(email, password);

        doctorsCollection.findOne({email, password})
            .then(function (doctor) {
                if (!doctor)
                    return done(null, false);

                doctor.authType = 'police-auth';
                return done(null, doctor);
            })
            .catch(function (err) {
                done(err);
            })
    }
));

//auth logic for user type
passport.use('users-auth', new LocalStrategy(
    {usernameField: 'email', passwordField: 'password'},
    function(email, password, done) {
        let usersCollection = db.collection('users');

        usersCollection.findOne({email, password})
            .then(function (user) {
                if (!user)
                    return done(null, false);

                user.authType = 'users-auth';
                return done(null, user);
            })
            .catch(function (err) {
                done(err);
            })
    }
));