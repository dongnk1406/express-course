const Course = require('../models/course');

class SiteController {
  // [GET] /
  home(req, res) {
    Course.find({}, (err, courses) => {
      if (!err) {
        res.json(courses);
      } else {
        res.status(400).json({ error: 'message' });
      }
    });
    // res.render('home');
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
