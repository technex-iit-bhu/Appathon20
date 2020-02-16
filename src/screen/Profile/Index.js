import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Header from "../../components/Header";
import { Layout, Text, List, Button, Icon } from "@ui-kitten/components";
import firebase from "firebase";
const AvatarSize = Math.round(Dimensions.get("window").width / 3);

class InfoList extends React.Component {
  render() {
    const { hint, message, value } = this.props;
    return (
      <Layout style={styles.infolist}>
        <Layout>
          <Text appearance="hint">{hint}</Text>
          {message ? (
            <Text appearance="hint" style={{ fontSize: 10 }}>
              {message}
            </Text>
          ) : null}
        </Layout>
        <Text>{value}</Text>
      </Layout>
    );
  }
}

class ProfileScreen extends Component {
  constructor() {
    super();
    this.state = {
      profile: {
        name: "",
        email: "",
        profile: "../../assets/Icon/icon.png",
        points: 0
      }
    };
  }
  componentDidMount() {
    AsyncStorage.getItem("profile", (err, res) => {
      if (err) {
        alert("error open when get profile data");
      } else {
        res = JSON.parse(res);
        this.setState({ profile: res });
      }
    });
  }
  logOut() {
    AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiRemove(keys))
      .then(() =>
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.props.navigation.navigate("LoadingScreen");
          })
      );
  }
  static navigationOptions = ({ navigation }) => {
    return {
      header: <Header title="Profile" />
    };
  };
  render() {
    const renderIcon = style => <Icon {...style} name="star" />;
    return (
      <React.Fragment>
        <Layout style={styles.container} level="2">
          <SafeAreaView>
            <ScrollView>
              <Layout
                style={{
                  backgroundColor: "transparent",
                  marginVertical: 40,
                  alignItems: "center"
                }}
              >
                <Image
                  style={{
                    width: AvatarSize,
                    height: AvatarSize,
                    borderRadius: AvatarSize / 2
                  }}
                  source={{ uri: this.state.profile.profile }}
                />
              </Layout>

              <InfoList hint={"Name"} value={this.state.profile.name} />
              <InfoList hint={"Email"} value={this.state.profile.email} />
              <InfoList hint={"Points"} value={this.state.profile.points} />
              <TouchableOpacity
                onLongPress={() => {
                  alert("Change your Policy number");
                }}
              >
                <InfoList
                  hint={"Insurance"}
                  value={"xxxxx"}
                  message={"*long press to change"}
                />
              </TouchableOpacity>

              <Layout style={{ marginHorizontal: 20, marginVertical: 15 }}>
                <Button appearance="outline" onPress={() => this.logOut()}>
                  Logout
                </Button>
              </Layout>
            </ScrollView>
          </SafeAreaView>
        </Layout>
      </React.Fragment>
    );
  }
}
export default createStackNavigator(
  { ProfileScreen },
  { headerMode: "screen" }
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  infolist: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f7f9fc"
  }
});
