import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfileByHandle } from "../../actions/profileAction";

class Test extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }
  render() {
    return <div>hi</div>;
  }
}

Test.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Test);
