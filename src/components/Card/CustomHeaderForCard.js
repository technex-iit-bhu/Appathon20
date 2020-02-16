import React, { Component } from "react";
import { Layout, Text, Card } from "@ui-kitten/components";
import { Icon } from "@ui-kitten/components";

export const CustomHeader = (title, icon) => () => (
  <React.Fragment>
    <Layout
      style={{ alignSelf: "flex-start", flexDirection: "row", padding: 10 }}
    >
      <Icon fill="#3366FF" width={20} height={20} name={icon} />
      <Text
        appearance="hint"
        style={{ textAlignVertical: "bottom", marginLeft: 10 }}
      >
        {title}
      </Text>
    </Layout>
  </React.Fragment>
);
