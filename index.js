const express = require('express');
require('dotenv').config();
const mongoose = require("mongoose");
const User = require("../models/user");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
var findOrCreate = require('mongoose-findorcreate')

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

//DB Connection
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

 app.use(bodyParser.json());
passport.use(new LinkedInStrategy({
  clientID: LINKEDIN_KEY,
  clientSecret: LINKEDIN_SECRET,
  callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback",
  scope: ['r_emailaddress', 'r_basicprofile'],
}, function (accessToken, refreshToken, profile, done) {
  User.findOrCreate({
    linkedinId: profile.id
  }, function (err, user) {
    return done(err, user);
  });
}));


// Routes
const loginRoute = require('./routes/login');
const signupRoute = require('./routes/signup');
const testRoute = require('./routes/test');
const authRoute = require('./routes/auth');

// middleware
app.use('/api/login', loginRoute);
app.use('/api/signup', signupRoute);
app.use('/api/test', testRoute);
app.use('/api/auth', authRoute);

app.use(express.static('public'));




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))