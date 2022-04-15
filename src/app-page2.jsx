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

// ReactDOM.render(<App />, mountNode);

export default Page;