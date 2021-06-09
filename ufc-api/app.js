var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');


var fightersRouter = require('./routes/fighters')
var fighterRouter = require('./routes/fighter')
var fightRouter = require('./routes/fight')
var statsRouter = require('./routes/stats')
var eventsRouter = require('./routes/events')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use('/ufc/fighters',fightersRouter);
app.use('/ufc/fighter',fighterRouter);
app.use('/ufc/fight',fightRouter);
app.use('/ufc/stats',statsRouter);
app.use('/ufc/events',eventsRouter);


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
    console.log('Page Not Found 404')
});

module.exports = app;