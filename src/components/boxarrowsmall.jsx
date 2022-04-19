import React, { Component } from "react";


class BoxArrowSmall extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className ? this.props.className : "box-arrow-small"}>
        <div>{this.props.copy}</div> <i class="fa fa-arrow-right style-guide-arrow" aria-hidden="true"></i>
      </div>
    );
  }
}

export default BoxArrowSmall;