let express = require('express');

let path = require('path');

let router = express.Router();

let routesDebug = require('./init');

router.get('/', function(req, res, next) {
  routesDebug('Logged in user: ' + JSON.stringify(req.query));

  res.render('dashboard', {user: req.query});
});

router.get('/details', function(req, res, next) {
  routesDebug('Display details using contract');

  res.send('Dashboard');
});

module.exports = router;
