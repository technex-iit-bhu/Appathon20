const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.projectname = !isEmpty(data.projectname) ? data.projectname : "";
  data.link = !isEmpty(data.link) ? data.link : "";
  data.description = !isEmpty(data.description) ? data.description : "";

  if (!Validator.isLength(data.description, { min: 10, max: 300 })) {
    errors.description = "Description needs to between 10 and 300 characters";
  }

  if (Validator.isEmpty(data.projectname)) {
    errors.projectname = "Project name is required";
  }
  if (Validator.isEmpty(data.link)) {
    errors.link = "Link is required";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "Description is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
