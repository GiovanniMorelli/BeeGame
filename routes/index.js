var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BeeGame' });
});

router.get('/beeGame', function(req, res, next) {
  res.render('template/beePage.jade');
});

module.exports = router;
