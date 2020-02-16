import React from "react";
import { AppLoading, SplashScreen } from "expo";
import { View, Text } from "react-native";
class ApplicationLoading extends React.Component {
  constructor() {
    super();
    SplashScreen.preventAutoHide();
    this.state = {
      loaded: false
    };
  }
  onLoadSuccess() {
    this.setState({ loaded: true });
    SplashScreen.hide();
  }
  onError() {
    alert("error app loading");
  }
  renderLoading() {
    return (
      <AppLoading
        //   startAsync={this.loadResources}
        onFinish={this.onLoadSuccess}
        onError={this.onLoadError}
        autoHideSplash={false}
      />
    );
  }
  render() {
    return (
      <React.Fragment>
        <Testing />
      </React.Fragment>
    );
  }
}

export default ApplicationLoading;

class Testing extends React.Component {
  render() {
    return (
      <View>
        <Text>SUrajs ss</Text>
      </View>
    );
  }
}
