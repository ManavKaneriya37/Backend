const mongoose = require('mongoose');
const plm = require('passport-local-mongoose')
mongoose.connect('mongodb://localhost:27017/InstaClone');

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    password: String,
    profileImage: String,
    bio: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }],
    stories: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "story" 
        }
    ],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
})

userSchema.plugin(plm);
module.exports = mongoose.model('user',userSchema);
