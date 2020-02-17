import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileAction";

import { Provider } from "react-redux";
import store from "./store";

import PrivateRouter from "./components/common/PrivateRoute";
import Landing from "./components/layout/landing";
import Header from "./components/layout/header";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import EditProfile from "./components/create-profile/EditProfile";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/profile/Profile";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout User
    store.dispatch(logoutUser());
    // Clear Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/portfolio/:handle" component={Profile} />
            <Switch>
              <PrivateRouter exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRouter
                exact
                path="/edit-profile"
                component={EditProfile}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
