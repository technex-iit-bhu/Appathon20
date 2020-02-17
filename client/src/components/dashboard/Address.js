import React, { Component } from "react";
import PropTypes from "prop-types";

class Address extends Component {
  render() {
    const { address } = this.props;
    return (
      <div>
        <h4 className="title">Address</h4>
        <div className="description">{address}</div>
      </div>
    );
  }
}

Address.propTypes = {
  address: PropTypes.string.isRequired
};

export default Address;
