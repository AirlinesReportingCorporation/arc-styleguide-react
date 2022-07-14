import React, { Component } from "react";

import {
  baseLink
  ourBrandLink,
} from "../links";

class TopNav extends Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {
    return (
      <div className="top_nav" style={{ zIndex: "4" }}>
        <div className="styleguide-sticky-container top_nav">
          <div className="styleguide-sticky-inner">
            <div className="styleguide-sticky-nav">
              <div className="styleguide-sticky-brand d-flex align-items-center">
                <a href={baseLink} className="arc-title">Style Guide</a>
              </div>
              <div className="styleguide-sticky-links d-flex align-items-center">
                <a
                  href={baseLink}
                  style={{ color: "white" }}
                  className="styleguide-sticky-link"
                >
                  Brand Overview
                </a>
                <a
                  href={ourBrandLink}
                  style={{ color: "white" }}
                  className="styleguide-sticky-link"
                >
                  Style Guide
                </a>
              </div>
              <div className="styleguide-sticky-menu d-flex align-items-center">
                <a href="https://www2.arccorp.com/about-us/newsroom/media-kit/" className="styleguide-sticky-link-right">
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
