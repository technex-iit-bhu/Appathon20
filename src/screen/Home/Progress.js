import React, { Component } from "react";
import ProgressCircle from "react-native-progress-circle";
import { Text } from "@ui-kitten/components";
export default class Progress extends Component {
  render() {
    const { steps, tobetraveld, DeviceWidth } = this.props;
    return (
      <ProgressCircle
        percent={(steps * 100) / tobetraveld}
        radius={DeviceWidth}
        borderWidth={8}
        color="#00FF00"
        shadowColor="#999"
        bgColor="#fff"
      >
        <Text category="h1">{steps}</Text>
        <Text category="s1">/{tobetraveld}</Text>
      </ProgressCircle>
    );
  }
}
