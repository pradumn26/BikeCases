module.exports = (app) => {
    app.get('/auth/fetchUser', (req, res) => {
        res.send(req.user);
    });

    app.get('/auth/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.post('/policeLogin',
        passport.authenticate('police-auth', {successRedirect: '/', failureRedirect: '/'}));

    app.post('/usersLogin',
        passport.authenticate('users-auth', {successRedirect: '/', failureRedirect: '/'}));

    app.post('/policeSignup', (req, res) => {
        let db = mongoUtil.getDb();
        let doctorsCollection = db.collection('police');

        let doctor = ({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            city: req.body.city,
            password: req.body.password
        });

        doctorsCollection.insert(doctor)
            .then(function (result) {
                doctor._id = result.insertedIds[0];
                doctor.authType = 'police-auth';
                req.login(doctor, function () {
                    res.redirect('/todaysAppointments?msg=Welcome+to+BikeCases.+You+are+successfully+registered.');
                })
            })
    });

    app.post('/usersSignup', (req, res) => {
        let db = mongoUtil.getDb();
        let usersCollection = db.collection('users');

        let user = ({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            city: req.body.city,
            password: req.body.password
        });

        usersCollection.insert(user)
            .then(function (result) {
                user._id = result.insertedIds[0];
                user.authType = 'users-auth';
                req.login(user, function () {
                    res.redirect('/doctors?msg=Welcome+to+BikeCases.+You+are+successfully+registered.');
                })
            })
    });
};