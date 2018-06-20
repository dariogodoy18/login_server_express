const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookeieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

//Database inport
const { url } = require('./config/database');
mongoose.connect(url);

//Passport config
//require('./config/passport')(passport);

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middleware
app.use(morgan('dev'));
app.use(cookeieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: 'hapodev',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//routes
require('./app/routes')(app, passport);

//Static files
app.use(express.static(path.resolve(__dirname, 'public')));

//Server starting
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});