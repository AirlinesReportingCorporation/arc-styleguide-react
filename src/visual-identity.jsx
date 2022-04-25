import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout";
import TermDef from "./components/termdefinition";

class Visual extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout active="style-guide">
        <div className="styleguide-doc-section border-bottom">
          <div className="styleguide-doc-inner">
            <div className="row">
              <div className="col-12">
                <h1>Visual Identity</h1>
                <p class="styleguide-doc-subtitle">
                  Our mission is to advance and unify the global air travel
                  community by delivering trusted solutions, proven expertise
                  and flexible technology. Our brand identity is a reflection of
                  the pride we feel for our work, an acknowledgement of our
                  history and a renewed vision for our future.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="styleguide-doc-section">
          <div className="styleguide-doc-inner">
            <div className="row">
              <div className="col-lg-12">
                <h2>Logo</h2>
                <p>
                  Our brand identity is a visual symbol of who we are. It
                  encapsulates our legacy, reinforces our mission and drives
                  home what we do for our industry. As such, it is important to
                  maintain consistency of our brand mark across all
                  applications. The logo color must never be modified unless
                  explicitly noted within this document. The ARC logo is
                  precisely proportioned. The size and position relationship
                  between the logo and full name must remain intact.
                </p>
              </div>
            </div>
            <TermDef />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Visual;

var mountNode = document.getElementById("app");

ReactDOM.render(<Visual />, mountNode);
