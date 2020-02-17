import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div
      className={classnames("form-group bmd-form-group", {
        "has-danger": error
      })}
    >
      {error && <label className="control-label text-danger">{error}</label>}
      {label && <label className="control-label">{label}</label>}
      <div className="input-group">
        <input
          type={type}
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};
TextFieldGroup.defaultProps = {
  type: "text"
};
export default TextFieldGroup;
