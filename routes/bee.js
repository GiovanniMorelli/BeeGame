var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/beeGame', function(req, res, next) {
  res.render('beePage.jade');
});

module.exports = router;
