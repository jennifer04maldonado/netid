var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var trustedSourceHome = require('./routes/trustedSourceHome');
var transactions = require('./routes/transactions');
var disputes = require('./routes/disputes');
var ratings = require('./routes/ratings');
var userDashboard = require('./routes/userDashboard');
var personaPersonalView = require('./routes/personaPersonalView');
var personaProfView = require('./routes/personaProfView');
var editSocialPer = require('./routes/editSocialPer');
var api = require('./routes/api');
var passport = require('passport');
var authenticate = require('./routes/authenticate')(passport);
var twitter = require('./routes/twitter');
/*var mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/test-twitter");
require('./models/models.js');*/
var routes = require('./routes');

var app = express();

/*var jsonO = {
  test: 'some test field',
  pass: 'bar'
};*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middleware below
// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//create session cookie
app.use(session({
  secret: 'kittymeow',
  saveUninitialized: true,
  resave: true,
  cookie: {
    maxAge: 60000
  }
}));
app.use(passport.initialize());
app.use(passport.session());
//initialize passport
var initPassport = require('./passport-init');
initPassport(passport);

//routes
//app.use('/', routes);
app.use('/trusted_source_home', trustedSourceHome);
app.use('/transactions', transactions);
app.use('/disputes', disputes);
app.use('/userDashboard', userDashboard);
app.use('/personaPersonalView', personaPersonalView);
app.use('/personaProfView', personaProfView);
//app.use('/', editSocialPer);
app.use('/api', api);
app.use('/auth', authenticate);
app.use('/twitter', twitter);
app.use('/ratings', ratings);


//handle ajax
/*app.get('/test', function(req, res) {
  res.render('/forms/new_social_persona_modal');
});*/

//app.js middleware to handle root request not in router

app.get('/', function(req, res, next) {
  //console.log(req.cookies);
  console.log(req.session);
  console.log(req.sessionID);

  //TODO: use session object or token
  var isLoggedIn = req.cookies.isAuthenticated;

  // if (isLoggedIn) {
  //     res.render('userDashboard');     
  // } else {
      res.render('index', { title: 'Express', object: req.session.cookie});
  // }

  
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
