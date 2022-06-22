import React, { Component } from "react";

class TopNav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="top_nav">
        <a href="/" className="icon-arc-logo"></a>
        <div className="styles-top-menu">
          <ul
            className={this.props.active == "our-brand" ? "active" : "inactive"}
          >
            <a href="/" style={{ color: "white" }}>
              {" "}
              Brand Overview{" "}
            </a>
          </ul>
          <ul
            className={
              this.props.active == "style-guide" ? "active" : "inactive"
            }
          >
            <a href="/our-brand.html" style={{ color: "white" }}>
              Style Guide
            </a>
          </ul>
        </div>
        <ul className="top_nav_media_ul">
          <a href="/" style={{ color: "white" }}>
            {" "}
            Media Kit
          </a>
        </ul>
      </div>
    );
  }
}

export default TopNav;
