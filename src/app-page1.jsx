import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { Component } from "react";
import ReactDOM from "react-dom";

class Landing extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <div className="container">
          <img src="https://www2.arccorp.com/globalassets/styleguide/images/masthead.png" alt="" />
          <div className="row">
            <div className="col-lg-12">Our Brand</div>

          </div>
        </div>
      </div>
    );
  }
}

// var mountNode = document.getElementById("app");

// ReactDOM.render(<Landing />, mountNode);
export default Landing;
