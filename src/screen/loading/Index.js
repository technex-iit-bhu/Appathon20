import React from "react";
import { ActivityIndicator, AsyncStorage } from "react-native";
import firebase from "firebase";

class Loading extends React.Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    AsyncStorage.getItem("profile", (err, result) => {
      if (err) {
        this.props.navigation.navigate("LoginScreen");
      } else {
        if (result) {
          this.props.navigation.navigate("DashboardScreen");
        } else {
          firebase.auth().onAuthStateChanged(
            function(user) {
              if (user) {
                var profile = {
                  name: user.displayName,
                  email: user.email,
                  profile: user.photoURL,
                  points: 0
                };
                AsyncStorage.setItem("profile", JSON.stringify(profile)).then(
                  () => {
                    this.props.navigation.navigate("DashboardScreen");
                  }
                );
              } else {
                this.props.navigation.navigate("LoginScreen");
              }
            }.bind(this)
          );
        }
      }
    });
  };

  render() {
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }
}
export default Loading;
