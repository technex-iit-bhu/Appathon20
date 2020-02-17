import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProject } from "../../actions/profileAction";

class Project extends Component {
  deleteProjectClick(id) {
    this.props.deleteProject(id);
  }
  render() {
    const project = this.props.project.map(project => (
      <tr key={project._id}>
        <td>{project.name}</td>
        <td>{project.link}</td>
        <td>{project.description}</td>
        <td className="td-actions">
          <button
            type="button"
            rel="tooltip"
            className="btn btn-danger"
            onClick={this.deleteProjectClick.bind(this, project._id)}
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
              <th>Project Name</th>
              <th>Link</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{project}</tbody>
        </table>
      </div>
    );
  }
}

Project.propTypes = {
  deleteProject: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteProject }
)(Project);
