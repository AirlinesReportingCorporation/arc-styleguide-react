import React, { Component } from "react";

import LeftNav from "./leftnav";
import TopNav from "./topnav";

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="styleguide-page" style={{ width: "100%" }}>
        <TopNav active={this.props.active} />

        <div className="flex_container">
          <LeftNav />
          <div className="flex_right_content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Layout;
