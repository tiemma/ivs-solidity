let express = require('express');

let path = require('path');

let router = express.Router();

let routesDebug = require('./init');

let url = require('url');

router.get('/', function(req, res, next) {
    let path_ = path.resolve(__dirname + '/../tutorial/index.html');

    routesDebug('Uport path: ' + path_);

    res.sendFile(path_);
});

router.post('/verify', function(req, res, next) {
    let name  = req.body.name;
    let address = req.body.address;
    let publicKey = req.body.publicKey;
    routesDebug(`Verifying user with details: \n
    Name:  ${name}\n 
    Address: ${address}\n 
    Public Key: ${publicKey}`
    );

    let details = {name: name,
        address: address,
        publicKey: publicKey
    };

    let redirect_url = url.format({
        pathname:"/dashboard",
        query:details
    });

    res.send({'url': redirect_url})
});

module.exports = router;
