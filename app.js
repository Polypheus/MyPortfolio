const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mainController = require('./controllers/mainController');

const app = express();
const PORT = 3000;

// Connect to MongoDB (commented out as it is optional)
// const MONGODB_URI = 'your-mongodb-uri';
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error(err));

// Set middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from "public"

// Set view engine
app.set('view engine', 'ejs'); // Use EJS for rendering views

// Route to render the HTML page with video
app.get('/', (req, res) => {
    res.render('index', {
        videoPath: '/Video/background.mp4' // Example path to your video file
    });
});

// Use controller
app.use('/', mainController); // Use routes defined in mainController

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
