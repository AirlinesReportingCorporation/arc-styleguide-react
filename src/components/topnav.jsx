import React, { Component } from "react";

class TopNav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="top_nav">
        <div className="icon-arc-logo"></div>
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
