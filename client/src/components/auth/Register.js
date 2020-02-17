import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

import { city } from "../../assets/img";
const cover = {
  backgroundImage: `url(${city})`,
  backgroundSize: "cover",
  backgroundPosition: "top center"
};
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    document.title = "Register || Bportfolio";
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    this.props.registerUser(newUser, this.props.history);
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="signup-page sidebar-collapse">
        <div
          className="page-header header-filter"
          filter-color="purple"
          style={cover}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-10 ml-auto mr-auto">
                <div className="card card-signup">
                  <h2 className="card-title text-center">Register</h2>
                  <div className="card-body">
                    <div className="row justify-content-center">
                      <div className="col-md-5">
                        <form className="form" onSubmit={this.onSubmit}>
                          <TextFieldGroup
                            name="name"
                            placeholder="Name..."
                            value={this.state.name}
                            onChange={this.onChange}
                            error={errors.name}
                          />
                          <TextFieldGroup
                            name="email"
                            placeholder="Email..."
                            type="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            error={errors.email}
                          />
                          <TextFieldGroup
                            name="password"
                            placeholder="Password..."
                            type="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            error={errors.password}
                          />
                          <div className="text-center">
                            <button
                              className="btn btn-primary btn-round"
                              type="submit"
                            >
                              Get Started
                            </button>
                          </div>
                        </form>
                      </div>
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
