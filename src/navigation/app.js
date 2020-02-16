import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// Import Screen Here
import TabNavigator from "./BottomNav";
import AuthScreen from "../screen/auth/Login";
import LoadingScreen from "../screen/loading/Index";
// initialized firebase
import * as firebase from "firebase";
import { firebaseConfig } from "../../config";
firebase.initializeApp(firebaseConfig);

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: AuthScreen,
  DashboardScreen: TabNavigator
});

export default createAppContainer(AppSwitchNavigator);
