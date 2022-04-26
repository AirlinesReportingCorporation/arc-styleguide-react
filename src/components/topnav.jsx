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
          <ul className={this.props.active == "our-brand" ? "active" : ""}>
            Brand Overview
          </ul>
          <ul>Style Guide</ul>
          <ul>Media Kit</ul>
        </div>
      </div>
    );
  }
}

export default TopNav;
