let express = require('express');

let router = express.Router();

let routesDebug = require('./init');

/* GET home page. */
router.get('/', function(req, res, next) {
  routesDebug('Visited index page');
  res.render('index', {title: 'Express'});
});

module.exports = router;
