import React, { Component } from "react";

class BoxArrowSmall extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a
        href={this.props.link}
        className={
          this.props.className
            ? this.props.className
            : "styleguide-box-arrow-small"
        }
      >
        <div>{this.props.copy}</div>{" "}
        <i className="fa fa-arrow-right style-guide-arrow" aria-hidden="true"></i>
      </a>
    );
  }
}

export default BoxArrowSmall;
