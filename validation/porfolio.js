const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.smallbio = !isEmpty(data.smallbio) ? data.smallbio : "";
  data.mainbio = !isEmpty(data.mainbio) ? data.mainbio : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.interests = !isEmpty(data.interests) ? data.interests : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!Validator.isLength(data.smallbio, { min: 3, max: 20 })) {
    errors.smallbio = "Small bio needs to between 3 and 20 characters";
  }

  if (Validator.isEmpty(data.smallbio)) {
    errors.smallbio = "Profile small bio is required";
  }
  if (!Validator.isLength(data.mainbio, { min: 30, max: 300 })) {
    errors.mainbio = "Main bio needs to between 30 and 300 characters";
  }
  if (Validator.isEmpty(data.mainbio)) {
    errors.mainbio = "Profile main bio is required";
  }
  if (Validator.isEmpty(data.address)) {
    errors.address = "Profile address is required";
  }
  if (Validator.isEmpty(data.interests)) {
    errors.interests = "Profile interests is required";
  }
  if (Validator.isEmpty(data.skills)) {
    errors.skills = "Skills field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
