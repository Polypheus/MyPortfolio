//import libraries in app.js which is the server
const express = require('express');
//create express app
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mainController = require('./controllers/mainController');

const PORT = 3000;
// const MONGODB_URI = 'your-mongodb-uri';

//connect to mongodb
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error(err));

//set middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from "public"

//set view engine
app.set('view engine', 'ejs'); // Use EJS for rendering views

//use controller
app.use('/', mainController); // Use routes defined in mainController

//start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
