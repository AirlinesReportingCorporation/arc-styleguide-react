import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout";
import TermsUsage from "./components/termusage";
import BottomPageNav from "./components/BottomPageNav";

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
                <p class="styleguide-doc-subtitle">
                  The ARC web style guide is an open-source design system for
                  our public facing online presence.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="styleguide-doc-section">
          <div className="styleguide-doc-inner">
            <div className="row">
              <div className="col-lg-12">
                <h2>Typography</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  ullam rem quisquam laboriosam similique, corporis incidunt
                  voluptatum ipsam corrupti totam animi quas impedit et esse
                  debitis deleniti illo. Quidem, culpa.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="styleguide-doc-section">
          <div className="styleguide-doc-inner">
            <div className="row">
              <div className="col-lg-12">
                <h2>Web Components</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  ullam rem quisquam laboriosam similique, corporis incidunt
                  voluptatum ipsam corrupti totam animi quas impedit et esse
                  debitis deleniti illo. Quidem, culpa.
                </p>
              </div>
            </div>
          </div>
        </div>
        <BottomPageNav
          prevLink="writing-style-guide.html"
          prevName="Writing Style Guide"
          nextLink="our-brand.html"
          nextName="Our Brand"
        />
      </Layout>
    );
  }
}

export default Web;

var mountNode = document.getElementById("app");

ReactDOM.render(<Web />, mountNode);
