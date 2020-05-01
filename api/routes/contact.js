var express = require('express');
var router = express.Router();
var path = require('path');

/* GET contacts page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});

module.exports = router;
