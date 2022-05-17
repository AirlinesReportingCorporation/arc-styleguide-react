import React, { Component } from "react";

class LeftNav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const brandURL = "/our-brand.html";
    const visualURL = "/visual-identity.html";
    const writingURL = "/writing-style-guide.html";
    const webURl = "/web-style-guide.html";
    return (
      <div className="flex_side_sticky">
        <div className="navbar">
          <div className="nav-menu">
            <ul className="nav-menu-items style-main-item">
              <a href="/">Our Brand</a>
            </ul>
            <ul className="nav-menu-items style-main-item">
              <a href={brandURL}>Using Our Brand</a>
            </ul>
            <ul className="nav-menu-items style-sub-item">
              <a href={brandURL + "#language"}>Brand Language</a>
            </ul>
            <ul className="nav-menu-items style-sub-item">
              <a href={brandURL + "#voice"}>Brand Voice</a>
            </ul>
            <ul className="nav-menu-items style-main-item">
              <a href={visualURL}>Visual Identity</a>
            </ul>
            <ul className="nav-menu-items style-sub-item"><a href={visualURL + "#logo"}>Logo</a></ul>
            <ul className="nav-menu-items style-sub-item"><a href={visualURL + "#typography"}>Typography</a></ul>
            <ul className="nav-menu-items style-sub-item"><a href={visualURL + "#colorPalette"}>Color Palette</a></ul>
            <ul className="nav-menu-items style-main-item">
              <a href={writingURL}>
                Writing Style Guide & Best Practices
              </a>
            </ul>
            <ul className="nav-menu-items style-sub-item">
              <a href={writingURL + "#frequent"}>Frequently Used Terms</a>
            </ul>
            <ul className="nav-menu-items style-sub-item">
              <a href={writingURL + "#formatting"}>
                Formatting Dates, Times, & Numbers
              </a>
            </ul>
            <ul className="nav-menu-items style-sub-item">
              <a href={writingURL + "#grammar-punctuation"}>Grammar & Punctuating</a>
            </ul>
            <ul className="nav-menu-items style-main-item"><a href={webURl}>Web Style Guide</a></ul>
            <ul className="nav-menu-items style-sub-item"><a href={webURl + "#typography"}>Typography</a></ul>
            <ul className="nav-menu-items style-sub-item"><a href={webURl + "#components"}>Components</a></ul>
            <ul className="nav-menu-items style-sub-item"><a href={webURl + "#bestPractices"}>Best Practices</a></ul>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftNav;
