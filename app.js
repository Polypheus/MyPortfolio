const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const mainController = require('./controllers/mainController');
app.get('/', mainController.index);
app.get('/about', mainController.about);

// Start the server
app.listen(port, () => {
    console.log('Server is running at http://localhost:${port}');
    });