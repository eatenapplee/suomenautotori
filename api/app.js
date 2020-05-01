var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");
//const {createProxyMiddleware} = require('http-proxy-middleware');

var indexRouter = require('./routes/index');
var contactRouter = require('./routes/contact');
var submitFormRouter = require('./routes/submitform')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS 

var corsOptions = {
  origin: /suomenautotori\.fi$/,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 200
}

//app.use(cors(corsOptions));

app.use(cors());

//app.use('/api', createProxyMiddleware({target: 'http://www.suomenautotori.fi', changeOrigin: true}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/contact', contactRouter);
app.use('/submitform', submitFormRouter);


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
