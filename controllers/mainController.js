// controllers/mainController.js

exports.index = (req, res) => {
    res.render('index', { title: 'Main Page' });
  };
  
  exports.about = (req, res) => {
    res.render('about', { title: 'About Page' });
  };
  