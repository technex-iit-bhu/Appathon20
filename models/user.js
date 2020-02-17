var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt-nodejs");

var UserSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true, required: true, lowercase: true },
    password: String,
    role: { type: String, default: "user" },
    resetPasswordToken: String,
    resetPasswordExpires: Date
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updateAt"
    }
  }
);

// hash
UserSchema.pre("save", function(next) {
  var user = this;
  if (!user.isModified("password")) return next();
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

//password check
UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model("User", UserSchema);
