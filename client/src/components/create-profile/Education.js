import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteEducation } from "../../actions/profileAction";

class Education extends Component {
  deleteButtonClick(id) {
    this.props.deleteEducation(id);
  }
  render() {
    const education = this.props.education.map(exp => (
      <tr key={exp._id}>
        <td>{exp.school}</td>
        <td>{exp.course}</td>
        <td>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
          <Moment format="YYYY/MM/DD">{exp.to}</Moment>
        </td>
        <td className="td-actions">
          <button
            type="button"
            rel="tooltip"
            className="btn btn-danger"
            onClick={this.deleteButtonClick.bind(this, exp._id)}
          >
            <i className="material-icons">close</i>
          </button>
        </td>
      </tr>
    ));
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>School / College</th>
              <th>Degree</th>
              <th>Since</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{education}</tbody>
        </table>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);
