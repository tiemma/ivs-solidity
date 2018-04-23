let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let sassMiddleware = require('node-sass-middleware');

require('dotenv').config();
let routesDebug = require('./routes/init');
let debug = require('debug')('hackathon:server');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let uportRouter = require('./routes/uport');
let dashboardRouter = require('./routes/dashboard');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true,
}));

app.use('/', express.static(path.join(__dirname, 'public')));
let contractPath = path.resolve(__dirname, 'truffle/build/contracts');
debug('Contract path: ' + contractPath);
app.use('/contracts', express.static(contractPath));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/uport', uportRouter);
app.use('/dashboard', dashboardRouter);
routesDebug('Routes initialised');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;


