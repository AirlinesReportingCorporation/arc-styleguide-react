import React, { Component } from "react";

class BoxArrow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={this.props.className ? this.props.className : "box-arrow"}
      >
        <div className="box-arrow-inner">
          <div className="box-arrow-title">{this.props.copy}</div>
          <div className="image-center">
            <img src={this.props.image} alt="" className="BoxArrowImg" />
          </div>
          <div className="arrow">
          <i class="fa fa-arrow-right style-guide-arrow" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxArrow;
