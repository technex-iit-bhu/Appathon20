const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.college = !isEmpty(data.college) ? data.college : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.from = !isEmpty(data.from) ? data.from : "";
  data.to = !isEmpty(data.to) ? data.to : "";

  if (Validator.isEmpty(data.college)) {
    errors.college = "College is required";
  }
  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree is required";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "From is required";
  }
  if (Validator.isEmpty(data.to)) {
    errors.to = "To is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
