import React, { Component } from "react";
import { Layout, Text } from "@ui-kitten/components";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryGroup
} from "victory-native";

export default class Graph extends Component {
  render() {
    const { itemWidth, data } = this.props;
    return (
      <Layout>
        {data.length < 3 ? (
          <Text>Use app for atleast 3 days to generate a graph</Text>
        ) : (
          <VictoryChart
            domainPadding={{ x: 40 }}
            width={itemWidth}
            theme={VictoryTheme.material}
          >
            <VictoryGroup colorScale={"qualitative"}>
              <VictoryLine data={data} x="day" y="run" />
              <VictoryLine data={data} x="day" y="prediction" />
            </VictoryGroup>
          </VictoryChart>
        )}
      </Layout>
    );
  }
}
