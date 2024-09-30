const mongoose = require('mongoose');
const plm =  require('passport-local-mongoose');

mongoose.connect('mongodb://localhost:27017/PassportPractice');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  }
});

userSchema.plugin(plm);
module.exports = mongoose.model('user', userSchema);
