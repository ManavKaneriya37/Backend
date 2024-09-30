const express = require('express');
const path = require('path')
const app = express();

const expressSession = require('express-session');
const passport = require('passport');
const userModel = require('./models/user')

const port = 3000;

const localStrategy = require('passport-local');
passport.use(new localStrategy(userModel.authenticate()));

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: 'aG4rL8',
}))

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/register', (req, res) => {
    var user = new userModel({
        username: req.body.username
    })


    userModel.register(user, req.body.password)
    .then(() => {
        passport.authenticate('local')(req, res, function() {
            res.redirect('/profile');
        })
    })
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
}), function(req, res) {});

app.get('/profile',isLoggedIn, (req, res) => {
    res.render("profile");
});

app.get('/logout',isLoggedIn, (req, res) => {
    req.logout(err => {
        if(err)
            return next(err);
        res.redirect('/');  
    });
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated())
        return next();
    res.redirect('/login');
}

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});