var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

// router.get('/services', function(req, res, next) {
//   res.render('index', { title: 'Services' });
// });

// router.get('/laptop', function(req, res, next) {
//   res.send('This is the laptop from the index.');
// });

module.exports = router;
