// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  phone: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
