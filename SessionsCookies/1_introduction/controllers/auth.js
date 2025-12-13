const User = require('../models/user');

exports.getLogin = (req, res, next) => {
   console.log(req.session.isLoggedIn);
    res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
   });
};

exports.postLogin = (req, res, next) => {
     User.findById('693bb5671243744b5687238e')
    .then(user => {
        req.session.user = user;
        req.session.isLoggedIn = true;
        req.session.save(err => {
            console.log(err);
            res.redirect('/');
        });
    })
    .catch(err => console.log(err));
};