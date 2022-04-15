import React, { Component } from "react";


class BoxArrowSmall extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className ? this.props.className : "box-arrow-small"}>
        <div>{this.props.copy}</div>
      </div>
    );
  }
}

export default BoxArrowSmall;