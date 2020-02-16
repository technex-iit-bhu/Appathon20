import React, { Component } from "react";
import { Dimensions, Image } from "react-native";
import { Layout, Button, Icon, Text } from "@ui-kitten/components";
// import Expo from "expo";
import * as Google from "expo-google-app-auth";
import firebase from "firebase";
const ButtonWidth = (Dimensions.get("window").width * 75) / 100;

class AuthScreen extends Component {
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };
  onSignIn = googleUser => {
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
        unsubscribe();
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          firebase
            .auth()
            .signInAndRetrieveDataWithCredential(credential)
            .then(function(result) {
              if (result.additionalUserInfo.isNewUser) {
                firebase
                  .database()
                  .ref("/users/" + result.user.uid)
                  .set({
                    gmail: result.user.email,
                    profile_picture: result.additionalUserInfo.profile.picture,
                    first_name: result.additionalUserInfo.profile.given_name,
                    last_name: result.additionalUserInfo.profile.family_name,
                    created_at: Date.now()
                  })
                  .then(function(snapshot) {
                    this.props.navigation.navigate("LoadingScreen");
                  });
              } else {
                firebase
                  .database()
                  .ref("/users/" + result.user.uid)
                  .update({
                    last_logged_in: Date.now()
                  });
              }
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          // console.log("User already signed-in Firebase.");
        }
      }.bind(this)
    );
  };
  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "605484856938-nipr3qlip09dgl2igd7oi888g36ub0t8.apps.googleusercontent.com",
        androidStandaloneAppClientId:
          "605484856938-f8573hhfb7q8vp0gukfa65nn3c83re3i.apps.googleusercontent.com",
        behavior: "web",
        // iosClientId: '', //enter ios client id
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        this.onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };
  render() {
    const renderIcon = style => <Icon {...style} name="star" />;
    const { navigate } = this.props.navigation;
    return (
      <Layout
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            style={{
              width: (Dimensions.get("window").width * 50) / 100,
              height: (Dimensions.get("window").width * 50) / 100
            }}
            source={require("../../assets/Icon/icon.png")}
          />
        </Layout>
        <Layout
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 15
          }}
        >
          <Text category="h1">DashCash</Text>
        </Layout>
        <Layout
          style={{
            maxWidth: ButtonWidth,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 40
          }}
        >
          <Text appearance="hint" style={{ textAlign: "center" }}>
            Bhago Grahak Bhago
          </Text>
        </Layout>
        <Layout style={{ marginBottom: 15, marginHorizontal: 20 }}>
          <Button
            appearance="outline"
            style={{ width: ButtonWidth }}
            onPress={() => this.signInWithGoogleAsync()}
          >
            Sign In with Google
          </Button>
        </Layout>
      </Layout>
    );
  }
}

export default AuthScreen;
