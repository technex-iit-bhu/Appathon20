import React from "react";
import SvgAnimatedLinearGradient from "react-native-svg-animated-linear-gradient";
import Svg, { Circle, Rect } from "react-native-svg";
class LazyLoad extends React.Component {
  render() {
    const { height, width } = this.props;
    return (
      <SvgAnimatedLinearGradient
        height={height}
        style={{ padding: 0, margin: 0 }}
      >
        <Rect x="0" y="0" rx="5" ry="5" width={width} height={height} />
      </SvgAnimatedLinearGradient>
    );
  }
}

export default LazyLoad;
