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
      <Layout active="our-brand">
        <div>
          <TermsUsage
            incorrectCopy="This is wrong"
            correctCopy="This is right"
          />
        </div>
      </Layout>
    );
  }
}

// var mountNode = document.getElementById("app");

// ReactDOM.render(<Landing />, mountNode);
export default Landing;
