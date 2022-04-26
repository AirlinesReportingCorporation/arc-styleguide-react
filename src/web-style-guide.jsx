import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout";
import TermsUsage from "./components/termusage";

class Web extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout active="our-brand">
        <div className="styleguide-doc-section border-bottom">
          <div className="styleguide-doc-inner">
            <div className="row">
              <div className="col-lg-12">
                <h1>Web Style Guide</h1>
                <p class="styleguide-doc-subtitle">The ARC web style guide is an open-source design system for our public facing 
online presence.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="styleguide-doc-section">
          <div className="styleguide-doc-inner">
            <div className="row">
              <div className="col-lg-12">
                  <h2>Typography</h2>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Web;

var mountNode = document.getElementById("app");

ReactDOM.render(<Web />, mountNode);
