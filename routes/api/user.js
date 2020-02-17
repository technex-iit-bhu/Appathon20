var router = require("express").Router();
var User = require("../../models/user");
var jwt = require("jsonwebtoken");
var secret = require("../../config/secret");
var passport = require("passport");

// Load Input ValidationInput
var registerIputValidation = require("../../validation/register");
var loginIputValidation = require("../../validation/login");

// @route     Get api/register
// @desc      Register User
// @access    Public
router.post("/register", function(req, res, next) {
  console.log(req.body);
  const { errors, isValid } = registerIputValidation(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  } else {
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    User.findOne({ email: req.body.email }, function(err, existinguser) {
      if (err) return next(err);
      if (existinguser) {
        errors.email = "E-mail already exists";
        res.status(400).json(errors);
      } else {
        user.save(function(err, user) {
          if (err) return next(err);
          res.json({ user: user });
        });
      }
    });
  }
});

// @route     Get api/login
// @desc      Login User
// @access    Public
router.post("/login", function(req, res, next) {
  const { errors, isValid } = loginIputValidation(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  } else {
    User.findOne({ email: req.body.email }, function(err, user) {
      if (err) return next(err);
      // check for user
      if (!user) {
        errors.email = "No user found";
        return res.status(404).json(errors);
      }
      if (!user.comparePassword(req.body.password)) {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      } else {
        var payload = {
          id: user._id,
          name: user.name,
          email: user.email,
          username: user.username
        };
        jwt.sign(payload, secret.secretKey, { expiresIn: 3600 }, function(
          err,
          token
        ) {
          console.log(token);

          res.json({ success: true, token: "bearer " + token });
        });
      }
    });
  }
});

// @route     Get api/users
// @desc      Login User
// @access    Public
router.get("/users", function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) {
      return res.status(404);
    }
    res.status(200).json({ users: users });
  });
});

module.exports = router;
