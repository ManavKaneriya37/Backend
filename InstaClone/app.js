const express = require('express');
const app = express();
const path = require('path');
const expressSession = require('express-session')
const passport = require('passport')
const userModel = require('./models/user');
const localStrategy = require('passport-local')
const upload = require('./controllers/multer')
passport.use(new localStrategy(userModel.authenticate()));
const postModel = require('./models/post')

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "Nothing Special"
}))
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
})
app.post('/register', (req, res) => {   
    const {username, password, name} = req.body;
    const userData = new userModel({
        username, name
    })
    userModel.register(userData, password)
    .then(function(){
        passport.authenticate('local')(req, res, function(){
            res.redirect('/profile');
        })
    })
})
app.get("/login", (req, res) => {
    res.render("login");
})
app.post('/login', passport.authenticate('local', {
    successRedirect: "/profile",
    failureRedirect: "/login"
}))
app.get('/feed',isLoggedIn, async (req, res) => {
    const posts = await postModel.find().populate('user')
    res.render('feed', {posts});
});
app.get('/profile',isLoggedIn, async(req, res) => {
    const user = await userModel.findOne({username: req.session.passport.user}).populate('posts')
    res.render('profile', {user});
})
app.get("/editprofile",isLoggedIn, async (req, res) => {
    const user = await userModel.findOne({username: req.session.passport.user});
    res.render("editprofile", {user})
})
app.get('/create', isLoggedIn, (req, res) => {
    res.render('createpost');
})
app.post('/upload', isLoggedIn, upload.single('image'), async (req, res) => {
    const user = await userModel.findOne({username: req.session.passport.user});
    let post = await postModel.create({
        picture:  req.file.filename,
        user: user._id,
        caption: req.body.caption
    })

    user.posts.push(post._id)
    await user.save();
    res.redirect('/feed')
})
app.post('/updateprofile', isLoggedIn, upload.single('image'), async (req, res) => {
    const user = await userModel.findOneAndUpdate({username: req.session.passport.user},{
        name: req.body.name,
        username: req.body.username,
        bio: req.body.bio
    },{ new: true})

    if(req.file){
        user.profileImage = req.file.filename;
    }
    await user.save();
    res.redirect('/profile');   
});

app.get('/logout', (req, res, next) =>{
    req.logout(err => {
        if(err) next(err);
        res.redirect('/login')
    })
})


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

app.listen(3000);
