const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;
require('dotenv').config();
exports.signup =  (req,res)=>{

  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {

    const user = new User({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hash
    });
    user.save((err, user) => {
      console.log(req.body.password);
      if (err) {
        return res.status(400).json({
          err: "NOT able to save user in DB"
        });
      }
      res.json({
        name: user.name,
        email: user.email,
        id: user._id
      });
    });
    
   })
};
