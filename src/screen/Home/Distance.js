import React, { Component } from "react";
import { Layout, Text } from "@ui-kitten/components";
export default class Steps extends Component {
  render() {
    const { steps } = this.props;
    return (
      <Layout>
        <Text category="h4">{((steps * 1) / 1400).toFixed(2)} Km</Text>
      </Layout>
    );
  }
}
