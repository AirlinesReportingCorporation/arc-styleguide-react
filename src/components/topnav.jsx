import React, { Component } from "react";
import stickybits from "stickybits";

class TopNav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="top_nav">
        <div className="styleguide-sticky-container top_nav" style={{ zIndex: "12" }}>
          <div className="styleguide-sticky-inner">
            <div className="styleguide-sticky-nav">
              <div className="styleguide-sticky-brand d-flex align-items-center">
                <a href="/" className="icon-arc-logo"></a>
              </div>
              <div className="styleguide-sticky-links d-flex align-items-center">
                <a
                  href="/"
                  style={{ color: "white" }}
                  className="styleguide-sticky-link"
                >
                  Brand Overview
                </a>
                <a
                  href="#expertise"
                  style={{ color: "white" }}
                  className="styleguide-sticky-link"
                >
                  Style Guide
                </a>
              </div>
              <div className="styleguide-sticky-menu d-flex align-items-center">
                <a href="/" className="styleguide-sticky-link-right">
                  Media Kit <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;
