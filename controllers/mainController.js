// controllers/mainController.js

exports.index = (req, res) => {
    res.render('login', { title: 'Login' });
  };
  
  exports.about = (req, res) => {
    res.render('main', { title: 'Main' });
  };
  