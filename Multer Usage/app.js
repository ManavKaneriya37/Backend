const express = require('express')
const app = express()

const userModel = require('./models/user')
const postModel = require('./models/post')
const path = require('path')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const upload = require('./config/multerconfig')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())


app.get('/' ,(req, res) => {
    res.render("index");
})

app.get('/profile/upload', isLoggedIn, (req, res) => {
    res.render('profileupload')
})

app.post('/upload', upload.single('image'), isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({email: req.user.email})
    user.profilepic = req.file.filename;
    await user.save()
    res.redirect('/profile')
})

app.post('/register', async (req, res) => {
    const {name, username, email, password, age} = req.body;
    const existuser = await userModel.findOne({email})

    if(existuser)   return res.status(500).send('User already registered')
    
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                let createduser = await userModel.create({
                    name, 
                    username,
                    password: hash,
                    age,
                    email,
                })

                let token = jwt.sign({email, userid: createduser._id}, "secret")
                res.cookie('token', token)
                res.redirect('/')
            })
        })
})

app.get("/login",(req, res) => {
    res.render('login')
})
app.post('/login',  async (req, res) => {
    const {email, password} = req.body;  

    const existuser = await userModel.findOne({email})
    if(!existuser)   return res.status(500).send('Something went wrong')

    bcrypt.compare(password, existuser.password, (err,result) => {
        if(result) {
            let token = jwt.sign({email, userid: existuser._id}, "secret")
            res.cookie('token', token)
            res.redirect("/profile")
        }
        else res.redirect("/login") 
    })

})

app.get('/profile', isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({email: req.user.email})
    await user.populate('posts') // it converts ObejctId to data
    res.render('profile', {user})
})

app.post('/post', isLoggedIn, async(req, res) => {
    let user = await userModel.findOne({email: req.user.email})

    let post = await postModel.create({
        user: user._id,
        content: req.body.content,
    })

    user.posts.push(post._id)
    await user.save();
    res.redirect('/profile')

})

app.get('/like/:id', isLoggedIn, async(req, res) => {
    let post = await postModel.findOne({_id: req.params.id}).populate('user')

    if(post.likes.indexOf(req.user.userid) === -1) {
        post.likes.push(req.user.userid)
    } else {
        post.likes.splice(post.likes.indexOf(req.user.userid), 1)
    }
    
    await post.save()
    res.redirect('/profile')
})

app.get('/edit/:id', isLoggedIn, async(req, res) => {
    let post = await postModel.findOne({_id: req.params.id}).populate('user')

    res.render('edit', {post})
})
app.post('/update/:id', isLoggedIn, async(req, res) => {
    let post = await postModel.findOneAndUpdate({_id: req.params.id}, {content: req.body.content})
    res.redirect('/profile')
})
app.get('/delete/:id', isLoggedIn, async(req, res) => {
    let post = await postModel.findOneAndDelete({_id: req.params.id})

    let user = await userModel.findOne({_id: req.user.userid})
    user.posts.splice(user.posts.indexOf(post._id),1)
    user.save()

    res.redirect('/profile')    
})
app.get('/logout', (req, res) => {
    res.cookie("token", "")
    res.redirect('/login')
})

function isLoggedIn(req, res, next) {
    if(req.cookies.token == "") res.redirect('/login')
    else{
        let data = jwt.verify(req.cookies.token, "secret")
        req.user = data;
        next();  
    }

}

app.listen(3000)