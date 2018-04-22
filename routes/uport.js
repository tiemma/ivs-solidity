let express = require('express');

let path = require('path');

let router = express.Router();


let routesDebug = require('./init');

router.get('/', function(req, res, next) {

    let path_ = path.resolve(__dirname + '/../tutorial/index.html');

    routesDebug('Uport path: ' + path_);

    res.sendFile(path_)
});



module.exports = router;
