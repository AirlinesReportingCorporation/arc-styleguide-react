import React, { Component } from "react";

class BoxArrow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a
        href={this.props.link}
        className={
          this.props.className ? this.props.className : "styleguide-box-arrow"
        }
      >
        <div className="styleguide-box-arrow-inner">
          <div
            className="styleguide-box-arrow-title"
            style={{ maxWidth: this.props.titleWidth }}
          >
            {this.props.copy}
          </div>
          <div className="image-center">
            <img
              src={this.props.image}
              alt=""
              className="styleguide-boxArrowImg"
            />
          </div>
          <div className="arrow" style={{display:"flex"}}>
            <i
              className="fa fa-arrow-right style-guide-arrow-box"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </a>
    );
  }
}

export default BoxArrow;
