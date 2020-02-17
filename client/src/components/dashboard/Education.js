import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

class Education extends Component {
  render() {
    const { education } = this.props;

    const educationItems = education.map(education => (
      <div className="col-md-6" key={education._id}>
        <div className="card card-profile card-plain">
          <div className="row">
            <div className="col-md-12">
              <div className="card-body">
                <h4 className="card-title">
                  College / School: {education.school}
                </h4>
                <h6 className="card-category text-muted">
                  Degree : {education.course}
                </h6>
                <p className="card-description">
                  {" "}
                  Since: <Moment format="YYYY/MM/DD">{education.from}</Moment> -
                  <Moment format="YYYY/MM/DD">{education.to}</Moment>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="team-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-center">
              <h2 className="title">Education</h2>
            </div>
          </div>
          <div className="row">{educationItems}</div>
        </div>
      </div>
    );
  }
}

Education.propTypes = {
  education: PropTypes.array.isRequired
};

export default Education;
