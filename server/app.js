var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const helmet = require("helmet");

var getCarsRouter = require('./routes/getCars');
var getLocationRouter = require('./routes/getLocation');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.disable('etag');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
  })
);

app.use(express.static(path.join(__dirname, '../../../../usr/share/nginx/html', 'static')));

console.log(path.join(__dirname, '../../../../../usr/share/nginx/html', 'static'))

app.use('/api/getCars', getCarsRouter);
app.use('/api/getLocation', getLocationRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;