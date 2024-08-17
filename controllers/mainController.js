//import express and create router
const express = require('express');
const router = express.Router();

//home route('/') renders.index.ejs view
router.get('/', (req, res) => {
    res.render('index');
  });

//about route ('about.ejs') renders the about.ejs view
router.get('/about', (req, res) => {
    res.render('about');
  });

//skills route
  router.get('/skills', (req, res) => {
    res.render('skills');
  });

//contacts route
  router.get('contacts', (req, res) => {
    res.render('contacts');
  });

//export router
module.exports = router;
