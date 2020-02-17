import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfileByHandle } from "../../actions/profileAction";
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
class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.portfolio) {
      if (!isEmpty(nextProps.portfolio.portfolio)) {
        document.title =
          nextProps.portfolio.portfolio.userid.name +
          " - " +
          nextProps.portfolio.portfolio.smallbio;
      }
    }
  }
  render() {
    const { portfolio, loading } = this.props.portfolio;
    const host = window.location.hostname;

    let dashboardContent;
    if (portfolio === null || loading) {
      dashboardContent = <Loader />;
    } else {
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
                        <h3 className="title">{portfolio.userid.name}</h3>
                        <h6>{portfolio.smallbio}</h6>
                        {isEmpty(
                          portfolio.socialaccount &&
                            portfolio.socialaccount.facebook
                        ) ? null : (
                          <a
                            href={portfolio.socialaccount.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-just-icon btn-link btn-facebook"
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                        )}
                        {isEmpty(
                          portfolio.socialaccount &&
                            portfolio.socialaccount.github
                        ) ? null : (
                          <a
                            href={portfolio.socialaccount.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-just-icon btn-link btn-github"
                          >
                            <i className="fa fa-github"></i>
                          </a>
                        )}
                        {isEmpty(
                          portfolio.socialaccount &&
                            portfolio.socialaccount.linkedin
                        ) ? null : (
                          <a
                            href={portfolio.socialaccount.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-just-icon btn-link btn-linkedin"
                          >
                            <i className="fa fa-linkedin"></i>
                          </a>
                        )}
                        {isEmpty(
                          portfolio.socialaccount &&
                            portfolio.socialaccount.instagram
                        ) ? null : (
                          <a
                            href={portfolio.socialaccount.instagram}
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
                      <a
                        href={`https://www.addtoany.com/share#url=http://${host}%2Fportfolio%2F${portfolio.username}`}
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
                  {portfolio.mainbio && <p>{portfolio.mainbio}</p>}
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
                        {isEmpty(portfolio.education) ? null : (
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
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tab-content tab-space">
                  <div className="tab-pane active work" id="work">
                    <div className="row">
                      {isEmpty(
                        portfolio.socialaccount &&
                          portfolio.socialaccount.github
                      ) ? (
                        <div className="col-md-7 ml-auto mr-auto ">
                          {isEmpty(portfolio.projects) ? null : (
                            <Project projects={portfolio.projects} />
                          )}
                        </div>
                      ) : (
                        <Github github={portfolio.socialaccount.github} />
                      )}
                      <div className="col-md-2 mr-auto ml-auto stats">
                        <h4 className="title">Skills</h4>
                        <Skills skills={portfolio.skills} />
                        <hr />
                        <Address address={portfolio.address} />
                        <hr />
                        <Interest interest={portfolio.interests} />
                      </div>
                    </div>
                    {isEmpty(
                      portfolio.socialaccount && portfolio.socialaccount.github
                    ) ? null : (
                      <div>
                        {isEmpty(portfolio.projects) ? null : (
                          <Project projects={portfolio.projects} />
                        )}
                      </div>
                    )}
                  </div>
                  {isEmpty(portfolio.education) ? null : (
                    <div className="tab-pane education" id="education">
                      <Education education={portfolio.education} />
                    </div>
                  )}
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

Profile.prototypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  portfolio: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  portfolio: state.profile
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);
