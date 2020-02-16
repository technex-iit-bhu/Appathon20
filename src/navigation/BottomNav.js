import React, { Component } from "react";
import { SafeAreaView } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";

// Import Screen Here
import HomeScreen from "../screen/Home/Index";
import ProfileScreen from "../screen/Profile/Index";
// Import Icons Here

import { HomeIcon, PersonIcon } from "../constants/icons";

const TabBarComponent = ({ navigation }) => {
  const onSelect = index => {
    const selectedTabRoute = navigation.state.routes[index];
    navigation.navigate(selectedTabRoute.routeName);
  };

  return (
    <SafeAreaView>
      <BottomNavigation
        selectedIndex={navigation.state.index}
        onSelect={onSelect}
      >
        <BottomNavigationTab title="Home" icon={HomeIcon} />
        <BottomNavigationTab title="Profile" icon={PersonIcon} />
      </BottomNavigation>
    </SafeAreaView>
  );
};
const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen
  },
  {
    tabBarComponent: TabBarComponent
  }
);

//Issue: the tab navigator needs to be wrapped inside a stack navigator
// export default createStackNavigator({ TabNavigator });
export default createStackNavigator({ TabNavigator }, { headerMode: "none" });
