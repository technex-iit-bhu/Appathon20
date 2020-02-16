import React from "react";
import { Card } from "@ui-kitten/components";
import { CustomHeader } from "./CustomHeaderForCard";
class CustomCard extends React.Component {
  render() {
    const { headericon, headername, children } = this.props;
    return (
      <Card
        header={headername ? CustomHeader(headername, headericon) : null}
        style={{
          marginVertical: 10,
          marginHorizontal: 20,
          borderRadius: 8,
          alignItems: "center"
        }}
        appearance={"filled"}
      >
        {children}
      </Card>
    );
  }
}

export default CustomCard;
