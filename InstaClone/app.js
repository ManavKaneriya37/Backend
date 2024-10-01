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
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "Nothing Special"
}))
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get('/', (req, res) => {
    res.render('login');
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
app.get("/signup", (req, res) => {
    res.render("index");
})
app.post('/login', passport.authenticate('local', {
    successRedirect: "/profile",
    failureRedirect: "/login"
}))
app.get('/feed',isLoggedIn, async (req, res) => {
    const posts = await postModel.find().populate('user')
    const user = await userModel.findOne({username: req.session.passport.user})
    res.render('feed', {posts, user});
});
app.get('/profile',isLoggedIn, async(req, res) => {
    const user = await userModel.findOne({username: req.session.passport.user}).populate('posts')
    res.render('profile', {user});
})
app.get("/editprofile",isLoggedIn, async (req, res) => {
    const user = await userModel.findOne({username: req.session.passport.user});
    res.render("editprofile", {user})
})
app.get('/search', isLoggedIn, async (req, res) => {
    res.render('searchuser');
})
app.get('/search/:user', isLoggedIn, async (req, res) => {
    const searchTerm = `^${req.params.user}`;
    const regex = new RegExp(searchTerm);

    let users = await userModel.find({username: {$regex: regex}});

    res.json(users);

})
app.get('/like/post/:id', isLoggedIn, async (req, res) => {
    const post = await postModel.findOne({_id: req.params.id});
    const user = await userModel.findOne({username: req.session.passport.user});

    if(post.likes.indexOf(user._id) == -1){
        post.likes.push(user._id);
    } else {
        post.likes.splice(post.likes.indexOf(user._id),1);
    }
    await post.save();
    res.redirect('/feed');
})
app.get('/profile/user/:user', isLoggedIn, async (req, res) => {
    const user = await userModel.findOne({username: req.params.user}).populate('posts');
    const currentUser = await userModel.findOne({username: req.session.passport.user});

    console.log("User ",user._id)
    console.log("Current User ",currentUser._id)
    
    res.render('userprofile', {user, currentUser, userid: user._id, currentUserID: currentUser._id});
})
app.get('/user/follow/:username', isLoggedIn, async (req, res) => {
    const followUser = await userModel.findOne({username: req.params.username});
    const follower = await userModel.findOne({username: req.session.passport.user});

    if(followUser.followers.indexOf(follower._id) == -1) {
        followUser.followers.push(follower._id);
        follower.following.push(followUser._id);
    } else {
        followUser.followers.splice(followUser.followers.indexOf(follower._id),1);
        follower.following.splice(follower.following.indexOf(followUser._id),1);
    }
    await followUser.save();
    await follower.save();

    res.redirect(`/profile/user/${followUser.username}`);
})
app.get('/create', isLoggedIn, (req, res) => {
    res.render('createpost');
})
app.get('/notify', isLoggedIn, (req, res) => {
    res.render('notify')
})
app.get('/messages', isLoggedIn,  (req, res) => {
    res.render('messages')
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
        res.redirect('/')
    })
})


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
