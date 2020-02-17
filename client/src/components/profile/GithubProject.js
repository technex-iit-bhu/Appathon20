import React, { Component } from "react";
import PropTypes from "prop-types";
import { city } from "../../assets/img";
const cover = {
  backgroundImage: `url(${city})`,
  backgroundSize: "cover",
  backgroundPosition: "top center",
  overflow: "hidden"
};

class GithubProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "0d4ddc95b91318abe6e7",
      clientSecret: "135854fbdb02ec1b7c992d9a43d6242040221075",
      count: 4,
      sort: "created: asc",
      repos: []
    };
  }
  abortContoller = new AbortController();
  componentDidMount() {
    const { github } = this.props;
    const username = github.split("/")[3];
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?client_id=${clientId}&client_secret=${clientSecret}&per_page=${count}&sort=${sort}`,
      { signal: this.abortContoller.signal }
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ repos: data });
      })
      .catch(err => console.log(err));
  }
  componentWillUnmount() {
    this.abortContoller.abort();
  }
  render() {
    const { repos } = this.state;
    const reposItem = repos.map(repo => (
      <div className="col-md-6" key={repo.id}>
        <div className="card card-background" style={cover}>
          <div className="card-body p-2">
            <label className="badge badge-warning">
              Fork {repo.forks_count}
            </label>
            <a href={repo.html_url}>
              <h2 className="card-title">{repo.name}</h2>
            </a>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="col-md-7 ml-auto mr-auto ">
        <h4 className="title">Latest Github Project</h4>
        <div className="row collections">{reposItem}</div>
      </div>
    );
  }
}

GithubProject.propTypes = {
  github: PropTypes.string.isRequired
};

export default GithubProject;
