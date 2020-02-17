import React, { Component } from "react";
import PropTypes from "prop-types";

class Project extends Component {
  render() {
    const { projects } = this.props;
    const projectItem = projects.map(project => (
      <div className="col-md-12" key={project._id}>
        <div className="card">
          <div className="card-body ">
            <h6 className="card-category text-success">
              <i className="material-icons">done</i> {project.name}
            </h6>
            <h4 className="card-title">{project.description}</h4>
          </div>
          <div className="card-footer ">
            <div className=" ml-auto">
              <a href={project.link} className="btn btn-primary btn-sm">
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="row">
        <div className="col-md-12">
          <h5 className="title">Projects Done</h5>
        </div>
        {projectItem}
      </div>
    );
  }
}

Project.propTypes = {
  projects: PropTypes.array.isRequired
};

export default Project;
