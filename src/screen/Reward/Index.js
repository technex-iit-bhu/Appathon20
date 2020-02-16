import { StyleSheet, Dimensions, Image, ScrollView } from "react-native";
import React, { Component } from "react";
import { Layout, Text, List } from "@ui-kitten/components";
import { SafeAreaView } from "react-navigation";
import Header from "../../components/Header";
import { createStackNavigator } from "react-navigation-stack";
class RewardScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    //return header with Custom View which will replace the original header
    return {
      header: <Header title="Rewards" />
    };
  };
  render() {
    return (
      <React.Fragment>
        <Layout style={styles.container} level="2">
          <SafeAreaView></SafeAreaView>
        </Layout>
      </React.Fragment>
    );
  }
}
export default createStackNavigator({ RewardScreen }, { headerMode: "screen" });
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
