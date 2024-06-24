//import mongoose object data modeling library for mongodb and node.js
const mongoose = require('mongoose');

//define user schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
  });

//create and export user model
module.exports = mongoose.model('User', userSchema);