let express = require('express');

let path = require('path');

let router = express.Router();

let fs = require('fs');

let routesDebug = require('./init');

let upload = require(path.resolve(
  __dirname + '/../public/javascripts/ipfs/upload.js'
));

router.get('/', function(req, res, next) {
  routesDebug('Logged in user: ' + JSON.stringify(req.query));

  res.render('dashboard', {user: req.query});
});

router.get('/details', function(req, res, next) {
  routesDebug('Display details using contract');

  res.send('Dashboard');
});

router.post('/upload', upload.multer.single('file'), function(req, res, next) {
  routesDebug('Uploading files to ipFS');

  let tmp_path = req.file.path;

  let target_path = path.resolve(
    __dirname,
    '../uploads/' + req.file.originalname
  );

  let src = fs.createReadStream(tmp_path);
  let dest = fs.createWriteStream(target_path);

  src.pipe(dest);
  src.on('end', function() {
    res.render('complete');
  });
  src.on('error', function(err) {
    res.render('error');
  });

  upload.upload(req.file).then(response => {
    console.log(response);
  });
  res.redirect('/dashboard');
});

module.exports = router;
