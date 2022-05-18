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
          <ul className={this.props.active == "our-brand" ? "active" : "inactive"}>
            Brand Overview
          </ul>
          <ul className={this.props.active == "style-guide" ? "active" : "inactive"}>Style Guide</ul>
        </div>
      </div>
    );
  }
}

export default TopNav;
