import React, { Component } from "react";
import stickybits from "stickybits";

import {
  baseLink,
  ourBrandLink,
  visualIdentityLink,
  writingStyleGuideLink,
  webStyleGuideLink,
} from "../links";

class LeftNav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    stickybits(".side-sticky-container");
  }

  render() {
    const brandURL = ourBrandLink;
    const visualURL = visualIdentityLink;
    const writingURL = writingStyleGuideLink;
    const webURl = webStyleGuideLink;
    const mediaKit = "https://www2.arccorp.com/about-us/newsroom/media-kit/";

    return (
      <div className="flex_side_sticky side-sticky-container">
        <div className="side-sticky-inner">
          <div className="side-sticky-nav">
            <div className="nav-menu side-sticky-links">
              <ul className="nav-menu-items style-main-item side-sticky-link">
                <a href={baseLink}>Our Brand</a>
              </ul>
              <ul className="nav-menu-items style-main-item side-sticky-link">
                <a href={brandURL}>Using Our Brand</a>
              </ul>
              <ul className="nav-menu-items style-sub-item side-sticky-link">
                <a href={brandURL + "#language"}>Brand Language</a>
              </ul>
              <ul className="nav-menu-items style-sub-item side-sticky-link">
                <a href={brandURL + "#voice"}>Brand Voice</a>
              </ul>
              <ul className="nav-menu-items style-main-item side-sticky-link">
                <a href={visualURL}>Visual Identity</a>
              </ul>
              <ul className="nav-menu-items style-sub-item side-sticky-link">
                <a href={visualURL + "#logo"}>Logo</a>
              </ul>
              <ul className="nav-menu-items style-sub-item side-sticky-link">
                <a href={visualURL + "#typography"}>Typography</a>
              </ul>
              <ul className="nav-menu-items style-sub-item side-sticky-link">
                <a href={visualURL + "#colorPalette"}>Color Palette</a>
              </ul>
              <ul className="nav-menu-items style-main-item side-sticky-link">
                <a href={writingURL}>Writing Style Guide</a>
              </ul>
              <ul className="nav-menu-items style-sub-item side-sticky-link">
                <a href={writingURL + "#frequent"}>Frequently Used Terms</a>
              </ul>
              <ul className="nav-menu-items style-sub-item side-sticky-link">
                <a href={writingURL + "#formatting"}>
                  Formatting Dates, Times & Numbers
                </a>
              </ul>
              <ul className="nav-menu-items style-sub-item side-sticky-link">
                <a href={writingURL + "#grammar-punctuation"}>
                  Grammar & Punctuation
                </a>
              </ul>
              <ul className="nav-menu-items style-main-item side-sticky-link">
                <a href={webURl}>Web Style Guide</a>
              </ul>
              <ul className="nav-menu-items style-sub-item side-sticky-link">
                <a href={webURl + "#typography"}>Typography</a>
              </ul>
              <ul className="nav-menu-items style-sub-item side-sticky-link">
                <a href={webURl + "#accessibility"}>Accessibility</a>
              </ul>
              <ul className="nav-menu-items style-sub-item side-sticky-link">
                <a href={webURl + "#bestPractices"}>Best Practices</a>
              </ul>
            </div>
            <hr></hr>
            <ul className="style-main-item side-sticky-link">
              <a href={mediaKit}>Media Kit</a>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftNav;
