import React, { Component } from "react";
import PropTypes from "prop-types";

class Skills extends Component {
  render() {
    const { skills } = this.props;
    const skillItem = skills.map((skill, index) => (
      <span className="badge badge-primary mr-1" key={index}>
        {skill}
      </span>
    ));
    return <div>{skillItem}</div>;
  }
}

Skills.propTypes = {
  skills: PropTypes.array.isRequired
};

export default Skills;
