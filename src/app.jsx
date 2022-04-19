import React, { Component } from "react";
import Landing from "./app-page1";
import Page from "./app-page2";
import BoxArrow from "./components/boxarrow";
import BoxArrowSmall from "./components/boxarrowsmall";

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
        <div style={{ backgroundColor: "white" }}>
          {/* Remove this style later */}
          <img
            src="https://www2.arccorp.com/globalassets/styleguide/images/masthead.png"
            className="masthead-landing"
            alt=""
          />
          <div className="content-area">
            <div>
              <h1>Our Brand</h1>
              <p style={{ fontSize: "24px" }}>
                ARC’s brand style guide provides a comprehensive view of ARC’s
                identity, including messaging, graphics, code and writing style.{" "}
              </p>
            </div>
            <h2>Frequently requested assets</h2>
            <div className="row" style={{ paddingBottom: "10px" }}>
              <div className="col-lg-6">
                <BoxArrowSmall copy="Arc Logos" />
              </div>
              <div className="col-lg-6">
                <BoxArrowSmall copy="Icons" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <BoxArrowSmall copy="Approved Photo" />
              </div>
              <div className="col-lg-6">
                <BoxArrowSmall copy="Presentation" />
              </div>
            </div>
            <h2>Explore Our Style Guide</h2>
            <div className="row">
              <div className="col-4">
                <BoxArrow copy="Using the ARC Brand" image="https://www2.arccorp.com/globalassets/covid19/ARC.png"/>
              </div>
              <div className="col-4">
              <BoxArrow copy="ARC's Visual Identity"/>
              </div>
              <div className="col-4">
              <BoxArrow copy="Writing Style Guide & Best Practices"/>
              </div>
              <div className="col-4">
              <BoxArrow copy="Web Style Guide"/>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default App;
