var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
var mongoose = require("mongoose");
var User = require("../models/user");
mongoose.model("User");
var secretKey = require("../config/secret");

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretKey.secretKey;
module.exports = function(passport) {
  passport.use(
    new JwtStrategy(opts, function(jwt_payload, done) {
      User.findById(jwt_payload.id)
        .then(function(user) {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(function(err) {
          console.log(err);
        });
    })
  );
};
