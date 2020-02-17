import React, { Component } from "react";
import PropTypes from "prop-types";

class Interest extends Component {
  render() {
    const { interest } = this.props;
    return (
      <div>
        <h4 className="title">Interests</h4>
        <div className="description">{interest}</div>
      </div>
    );
  }
}

Interest.propTypes = {
  interest: PropTypes.string.isRequired
};

export default Interest;
