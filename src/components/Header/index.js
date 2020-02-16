import React, { Component } from "react";
import { SafeAreaView } from "react-navigation";
import { TopNavigation } from "@ui-kitten/components";

class Header extends Component {
  render() {
    const { title } = this.props;

    return (
      <SafeAreaView>
        <TopNavigation alignment="center" title={title} category="label" />
      </SafeAreaView>
    );
  }
}

export default Header;
