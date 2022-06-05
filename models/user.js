const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  surname: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'admin',
  },
  photo: {
    type: String,
  }
})

module.exports = mongoose.model('user', UserSchema)