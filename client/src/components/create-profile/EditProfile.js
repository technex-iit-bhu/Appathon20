import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { city } from "../../assets/img";
import {
  createProfile,
  getCurrentProfile,
  addEducation,
  addProject,
  addSocial
} from "../../actions/profileAction";
import Education from "./Education";
import Work from "./Work";
import Loader from "../common/Loading";
import TextFieldGroup from "../common/TextFieldGroup";
import isEmpty from "../../validation/isEmpty.js";

const cover = {
  backgroundImage: `url(${city})`,
  backgroundSize: "cover",
  backgroundPosition: "top center"
};

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smallbio: "",
      mainbio: "",
      address: "",
      interests: "",
      skills: "",
      college: "",
      degree: "",
      from: "",
      to: "",
      projectname: "",
      link: "",
      description: "",
      facebook: "",
      instagram: "",
      github: "",
      linkedin: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onAddEducation = this.onAddEducation.bind(this);
    this.onAddProject = this.onAddProject.bind(this);
    this.onAddSocial = this.onAddSocial.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
    document.title = "Edit Profile || Bportfolio"
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (!isEmpty(nextProps.profile.profile)) {
      const profile = nextProps.profile.profile;

      // Bring skills array back to CSV
      const skillsCSV = !isEmpty(profile.skills)
        ? profile.skills.join(",")
        : "";

      // If profile field doesnt exist, make empty string
      profile.smallbio = !isEmpty(profile.smallbio) ? profile.smallbio : "";
      profile.mainbio = !isEmpty(profile.mainbio) ? profile.mainbio : "";
      profile.address = !isEmpty(profile.address) ? profile.address : "";
      profile.interests = !isEmpty(profile.interests) ? profile.interests : "";
      if (!isEmpty(profile.socialaccount)) {
        profile.socialaccount.facebook = !isEmpty(
          profile.socialaccount.facebook
        )
          ? profile.socialaccount.facebook
          : "";
        profile.socialaccount.instagram = !isEmpty(
          profile.socialaccount.instagram
        )
          ? profile.socialaccount.instagram
          : "";
        profile.socialaccount.linkedin = !isEmpty(
          profile.socialaccount.linkedin
        )
          ? profile.socialaccount.linkedin
          : "";
        profile.socialaccount.github = !isEmpty(profile.socialaccount.github)
          ? profile.socialaccount.github
          : "";
      } else {
        profile.socialaccount = {};
        profile.socialaccount.facebook = "";
        profile.socialaccount.instagram = "";
        profile.socialaccount.linkedin = "";
        profile.socialaccount.github = "";
      }

      // Set component fields state
      this.setState({
        smallbio: profile.smallbio,
        mainbio: profile.mainbio,
        address: profile.address,
        interests: profile.interests,
        skills: skillsCSV,
        facebook: profile.socialaccount.facebook,
        instagram: profile.socialaccount.instagram,
        linkedin: profile.socialaccount.linkedin,
        github: profile.socialaccount.github
      });
    }
  }

  onAddEducation(e) {
    e.preventDefault();
    const educationData = {
      college: this.state.college,
      degree: this.state.degree,
      from: this.state.from,
      to: this.state.to
    };
    this.props.addEducation(educationData, this.props.history);
  }
  onAddProject(e) {
    e.preventDefault();
    const projectData = {
      projectname: this.state.projectname,
      link: this.state.link,
      description: this.state.description
    };
    this.props.addProject(projectData, this.props.history);
  }
  onAddSocial(e) {
    e.preventDefault();
    const socailData = {
      facebook: this.state.facebook,
      instagram: this.state.instagram,
      github: this.state.github,
      linkedin: this.state.linkedin
    };
    this.props.addSocial(socailData, this.props.history);
  }

  onSubmit(e) {
    e.preventDefault();
    const portfolioData = {
      smallbio: this.state.smallbio,
      mainbio: this.state.mainbio,
      address: this.state.address,
      interests: this.state.interests,
      skills: this.state.skills
    };
    this.props.createProfile(portfolioData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Loader />;
    } else {
      dashboardContent = (
        <div className="product-page">
          <div
            className="page-header header-filter"
            data-parallax="true"
            filter-color="rose"
            style={cover}
          ></div>
          <div className="section">
            <div className="container">
              <div className="main main-raised">
                <div className="row">
                  <ul className="nav nav-pills nav-pills-icons" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#basic-info"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i className="material-icons">dashboard</i>
                        Dashboard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#education"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i className="material-icons">school</i>
                        Education
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#work"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i className="material-icons">work_outline</i>
                        Work
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#social"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i className="material-icons">emoji_people</i>
                        Social
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content tab-space text-left px-1">
                    <div className="tab-pane active" id="basic-info">
                      <form onSubmit={this.onSubmit}>
                        <div className="row">
                          <div className="col-md-12">
                            <TextFieldGroup
                              placeholder="Small Bio"
                              name="smallbio"
                              value={this.state.smallbio}
                              error={errors.smallbio}
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="col-md-12">
                            <TextFieldGroup
                              placeholder="Main Bio"
                              name="mainbio"
                              value={this.state.mainbio}
                              error={errors.mainbio}
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="col-md-12">
                            <TextFieldGroup
                              placeholder="Address"
                              name="address"
                              value={this.state.address}
                              error={errors.address}
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="col-md-12">
                            <TextFieldGroup
                              placeholder="Interests"
                              name="interests"
                              value={this.state.interests}
                              error={errors.interests}
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="col-md-12">
                            <TextFieldGroup
                              placeholder="Skills"
                              name="skills"
                              value={this.state.skills}
                              error={errors.skills}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-rose pull-right"
                        >
                          Save
                        </button>
                      </form>
                    </div>
                    <div className="tab-pane" id="education">
                      <form onSubmit={this.onAddEducation}>
                        <div className="row">
                          <div className="col-md-6">
                            <TextFieldGroup
                              placeholder="College / School"
                              name="college"
                              value={this.state.college}
                              error={errors.college}
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <TextFieldGroup
                              placeholder="Degree"
                              name="degree"
                              value={this.state.degree}
                              error={errors.degree}
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <TextFieldGroup
                              placeholder="From"
                              name="from"
                              label="From"
                              type="date"
                              value={this.state.from}
                              error={errors.from}
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <TextFieldGroup
                              placeholder="to"
                              name="to"
                              label="To"
                              type="date"
                              value={this.state.to}
                              error={errors.to}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-rose pull-right"
                        >
                          Save
                        </button>
                      </form>
                      {profile.education && (
                        <Education education={profile.education} />
                      )}
                    </div>
                    <div className="tab-pane" id="work">
                      <form onSubmit={this.onAddProject}>
                        <div className="row">
                          <div className="col-md-12">
                            <TextFieldGroup
                              placeholder="Project Name"
                              name="projectname"
                              value={this.state.projectname}
                              error={errors.projectname}
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="col-md-12">
                            <TextFieldGroup
                              placeholder="Project Link"
                              name="link"
                              value={this.state.link}
                              error={errors.link}
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="col-md-12">
                            <TextFieldGroup
                              placeholder="Project Description"
                              name="description"
                              value={this.state.description}
                              error={errors.description}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-rose pull-right"
                        >
                          Save
                        </button>
                      </form>
                      {profile.projects && <Work project={profile.projects} />}
                    </div>
                    <div className="tab-pane" id="social">
                      <form onSubmit={this.onAddSocial}>
                        <div className="row">
                          <div className="col-md-12">
                            <TextFieldGroup
                              placeholder="Github"
                              name="github"
                              value={this.state.github}
                              error={errors.github}
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="col-md-12">
                            <TextFieldGroup
                              placeholder="Facebook"
                              name="facebook"
                              value={this.state.facebook}
                              error={errors.facebook}
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="col-md-12">
                            <TextFieldGroup
                              placeholder="Instagram"
                              name="instagram"
                              value={this.state.instagram}
                              error={errors.instagram}
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="col-md-12">
                            <TextFieldGroup
                              placeholder="Linkedin"
                              name="linkedin"
                              value={this.state.linkedin}
                              error={errors.linkedin}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-rose pull-right"
                        >
                          Save
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <div>{dashboardContent}</div>;
  }
}

EditProfile.propTypes = {
  auth: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  addProject: PropTypes.func.isRequired,
  addEducation: PropTypes.func.isRequired,
  addSocial: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile, addEducation, addProject, addSocial }
)(withRouter(EditProfile));
