import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileAction";
import Loader from "../common/Loading";
import isEmpty from "../../validation/isEmpty.js";
import { city, avatar } from "../../assets/img";
import Github from "./GithubProject";
import Skills from "./Skills";
import Education from "./Education";
import Project from "./Project";
import Address from "./Address";
import Interest from "./Interest";

const cover = {
  backgroundImage: `url(${city})`,
  backgroundSize: "cover",
  backgroundPosition: "top center"
};
class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
    document.title = "View Profile || Bportfolio";
  }
  render() {
    const { profile, loading } = this.props.profile;
    const { user } = this.props.auth;
    const host = window.location.hostname;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Loader />;
    } else {
      if (Object.keys(profile).length > 0) {
        // Display profile
        dashboardContent = (
          <div className="profile-page">
            <div
              className="page-header header-filter"
              data-parallax="true"
              style={cover}
            ></div>
            <div className="main main-raised">
              <div className="profile-content">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 ml-auto mr-auto">
                      <div className="profile">
                        <div className="avatar">
                          <img
                            src={avatar}
                            alt="Circle"
                            className="img-raised rounded-circle img-fluid"
                          />
                        </div>
                        <div className="name">
                          <h3 className="title">{user.name}</h3>
                          <h6>{profile.smallbio}</h6>
                          {isEmpty(
                            profile.socialaccount &&
                              profile.socialaccount.facebook
                          ) ? null : (
                            <a
                              href={profile.socialaccount.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-just-icon btn-link btn-facebook"
                            >
                              <i className="fa fa-facebook"></i>
                            </a>
                          )}
                          {isEmpty(
                            profile.socialaccount &&
                              profile.socialaccount.github
                          ) ? null : (
                            <a
                              href={profile.socialaccount.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-just-icon btn-link btn-github"
                            >
                              <i className="fa fa-github"></i>
                            </a>
                          )}
                          {isEmpty(
                            profile.socialaccount &&
                              profile.socialaccount.linkedin
                          ) ? null : (
                            <a
                              href={profile.socialaccount.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-just-icon btn-link btn-linkedin"
                            >
                              <i className="fa fa-linkedin"></i>
                            </a>
                          )}
                          {isEmpty(
                            profile.socialaccount &&
                              profile.socialaccount.instagram
                          ) ? null : (
                            <a
                              href={profile.socialaccount.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-just-icon btn-link btn-instagram"
                            >
                              <i className="fa fa-instagram"></i>
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="follow">
                        <Link
                          to="/edit-profile"
                          className="btn btn-fab btn-primary btn-round"
                          rel="tooltip"
                          title="Edit profile"
                        >
                          <i className="material-icons">edit</i>
                        </Link>
                      </div>
                      <div className="follow" style={{ left: 0 }}>
                        <a
                          href={`https://www.addtoany.com/share#url=http://${host}%2Fportfolio%2F${profile.username}`}
                          className="btn btn-fab btn-primary btn-round"
                          rel="tooltip noopener noreferrer"
                          target="_blank"
                          title="Share portfolio"
                        >
                          <i className="material-icons">share</i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="description text-center">
                    {profile.mainbio && <p>{profile.mainbio}</p>}
                  </div>
                  <div className="row">
                    <div className="col-md-6 ml-auto mr-auto">
                      <div className="profile-tabs">
                        <ul
                          className="nav nav-pills nav-pills-icons justify-content-center"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#work"
                              role="tab"
                              data-toggle="tab"
                            >
                              <i className="material-icons">work</i> Work
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#education"
                              role="tab"
                              data-toggle="tab"
                            >
                              <i className="material-icons">school</i> Education
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content tab-space">
                    <div className="tab-pane active work" id="work">
                      <div className="row">
                        {isEmpty(
                          profile.socialaccount && profile.socialaccount.github
                        ) ? (
                          <div className="col-md-7 ml-auto mr-auto ">
                            <h4 className="title">
                              To show github projects please add your github
                              Profile Url
                            </h4>
                          </div>
                        ) : (
                          <Github github={profile.socialaccount.github} />
                        )}
                        <div className="col-md-2 mr-auto ml-auto stats">
                          <h4 className="title">Skills</h4>
                          <Skills skills={profile.skills} />
                          <hr />
                          <Address address={profile.address} />
                          <hr />
                          <Interest interest={profile.interests} />
                        </div>
                      </div>
                      {isEmpty(profile.projects) ? (
                        <p>You can also add other projects too in edit panel</p>
                      ) : (
                        <Project projects={profile.projects} />
                      )}
                    </div>
                    <div className="tab-pane education" id="education">
                      {isEmpty(profile.education) ? (
                        <p>
                          {" "}
                          Please add education details to show on portfolio
                        </p>
                      ) : (
                        <Education education={profile.education} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        // User is logged in but not have any profile
        dashboardContent = (
          <div className="profile-page">
            <div
              className="page-header header-filter"
              data-parallax="true"
              style={cover}
            ></div>
            <div className="main main-raised">
              <div className="profile-content">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 ml-auto mr-auto">
                      <div className="profile">
                        <div className="avatar">
                          <img
                            src={avatar}
                            alt="Circle"
                            className="img-raised rounded-circle img-fluid"
                          />
                        </div>
                        <div className="name">
                          <h3 className="title">{user.name}</h3>
                        </div>
                        <h4 className="description">
                          You have not yet setup a profile, Please add some info
                        </h4>
                        <br />
                        <Link to="/edit-profile" className="btn btn-info mb-5">
                          {" "}
                          Add info
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    return <div>{dashboardContent}</div>;
  }
}

Dashboard.prototypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
