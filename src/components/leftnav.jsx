import React, { Component } from "react";

class LeftNav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="flex_side_sticky">
        <div className="navbar">
          <div className="nav-menu">
            <ul className="nav-menu-items style-main-item">
              <a href="/our-brand.html">Our Brand</a>
            </ul>
            <ul className="nav-menu-items style-main-item">
              <a href="/our-brand.html">Using Our Brand</a>
            </ul>
            <ul className="nav-menu-items style-sub-item">
              <a href="/our-brand.html">Using Our Brand</a>
            </ul>
            <ul className="nav-menu-items style-sub-item">
              <a href="/our-brand.html">Brand Voice</a>
            </ul>
            <ul className="nav-menu-items style-main-item">
              <a href="/visual-identity.html">Visual Identity</a>
            </ul>
            <ul className="nav-menu-items style-sub-item">Logo</ul>
            <ul className="nav-menu-items style-sub-item">Typography</ul>
            <ul className="nav-menu-items style-sub-item">Color Palette</ul>
            <ul className="nav-menu-items style-main-item">
              <a href="/writing-style-guide.html">
                Writing Style Guide & Best Practices
              </a>
            </ul>
            <ul className="nav-menu-items style-sub-item">
              <a href="/writing-style-guide.html">Frequently Used Terms</a>
            </ul>
            <ul className="nav-menu-items style-sub-item">
              <a href="/writing-style-guide.html">
                Formatting Dates, Times, & Numbers
              </a>
            </ul>
            <ul className="nav-menu-items style-sub-item">
              <a href="/writing-style-guide.html">Grammar & Punctuating</a>
            </ul>
            <ul className="nav-menu-items style-main-item">Web Style Guide</ul>
            <ul className="nav-menu-items style-sub-item">Typography</ul>
            <ul className="nav-menu-items style-sub-item">Components</ul>
            <ul className="nav-menu-items style-sub-item">Best Practices</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftNav;
