import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { Component } from "react";
import ReactDOM from "react-dom";

class Page extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <div className="container">
        <img src="https://www2.arccorp.com/globalassets/styleguide/images/masthead.png" alt="" />
          <div className="row">
            <div className="col-lg-12">App page2</div>
            Page 2 Testing
          </div>
        </div>
      </div>
    );
  }
}

// var mountNode = document.getElementById("app");

// ReactDOM.render(<App />, mountNode);

export default Page;