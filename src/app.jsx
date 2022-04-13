import React, { Component } from "react";

import Landing from "./app-page1";
import Page from "./app-page2";

import Layout from "./components/layout";
import TermsUsage from "./components/termusage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentComponent: "",
    };
  }

  getComponent() {
    let component;
    switch (this.state.currentComponent) {
      case "Landing":
        component = <Landing />;
        break;
      case "Page":
        component = <Page />;
        break;
      case "compC":
        component = <CompC />;
        break;
      case "compD":
        component = <CompD />;
        break;
    }
    return component;
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

export default App;
