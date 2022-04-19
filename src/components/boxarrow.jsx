import React, { Component } from "react";


class BoxArrow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className ? this.props.className : "box-arrow"}>
        <div>{this.props.copy}</div>
        <img src={this.props.image} alt="" className="BoxArrowImg" />
        <i class="fa fa-arrow-right" aria-hidden="true"></i>
      </div>
    );
  }
}

export default BoxArrow;