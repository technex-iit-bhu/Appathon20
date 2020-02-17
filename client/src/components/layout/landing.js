import React, { Component } from "react";

import { city } from "../../assets/img";
const cover = {
  backgroundImage: `url(${city})`,
  backgroundSize: "cover",
  backgroundPosition: "top center"
};
class landing extends Component {
    componentDidMount() {
    document.title = "Bportfolio"
  }
  render() {
    return (
      <div>
        <div
          className="page-header header-filter"
          data-parallax="true"
          style={cover}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="title">Build your portfolio in minutes</h1>
                <h4>
                  That makes it even easier to build your online portfolio quickly. We'll pull in your photos right from your existing accounts, so you're website is ready in minutes.
                </h4>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  className="btn btn-danger btn-raised btn-lg"
                >
                  <i className="fa fa-play"></i> Watch video
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main main-raised">
          <div className="container">
            <div className="section text-center">
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                  <h2 className="title">It&apos;s Not Just About Your Work</h2>
                  <h5 className="description">
                    A good portfolio is made even better when it’s part of —including a bit about your story, background, and what type of person you’re like to work with.
                  </h5>
                </div>
              </div>
              <div className="features">
                <div className="row">
                  <div className="col-md-4">
                    <div className="info">
                      <div className="icon icon-info">
                        <i className="material-icons">search</i>
                      </div>
                      <h4 className="info-title">The Best SEO</h4>
                      <p>
                        Get found on search engines like Google with advanced SEO tools.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="material-icons">verified_user</i>
                      </div>
                      <h4 className="info-title">Verified Users</h4>
                      <p>
                        We only allow these verified user. Spam don&apos;t allowed.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="info">
                      <div className="icon icon-danger">
                        <i className="material-icons">mobile_friendly</i>
                      </div>
                      <h4 className="info-title">Mobile Optimized</h4>
                      <p>
                        Look amazing on every screen with a mobile version of your site.
                      </p>
                    </div>
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

export default landing;
