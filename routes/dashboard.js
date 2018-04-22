let express = require('express');

let path = require('path');

let router = express.Router();

let routesDebug = require('./init');

router.get('/', function(req, res, next) {
  routesDebug('Logged in user: ' + req.user.name);

  res.render('dashboard', {user: req.user});
});

module.exports = router;
