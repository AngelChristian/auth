require('dotenv').config();
const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require('bcrypt');
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
exports.login = (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "USER email does not exists"
      });
    }
  bcrypt.compare(req.body.password,user.password, function (err, result) {
    if (err || result === false) {
      return res.status(401).json({
        error: "Email and password do not match"
      });
    }
    else{
    if (result) {
        // create token
        const token = jwt.sign({ _id: user._id }, process.env.SECRET,{expiresIn:"1h"});
        // store token in cookie
        res.cookie("token", token, { maxAge: 3600000 });
      return res.status(200).json({
        message: "Authenticated successfully",
        token: token
      });
    }
}
  });
});
};

//protected routes
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  userProperty: "auth",
  algorithms: ['HS256']
});
