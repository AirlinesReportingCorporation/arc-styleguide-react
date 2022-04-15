import React, { Component } from "react";


class BoxArrow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className ? this.props.className : "box-arrow"}>
        <div>{this.props.copy}</div>
      </div>
    );
  }
}

export default BoxArrow;