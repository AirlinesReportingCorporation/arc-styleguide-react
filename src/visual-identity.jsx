import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout";
import TermDef from "./components/termdefinition";
import BoxArrow from "./components/boxarrow";
import TermsUsage from "./components/termusage";
import ColorBox from "./components/colorbox";

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
            <TermDef />
            <div className="row">
              <div className="col-lg-6">
                {/* <Box /> */}
              </div>
              <div className="col-lg-6">
                {/* <Box /> */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                {/* <Box /> */}
              </div>
              <div className="col-lg-3">
                {/* <Box /> */}
              </div>
              <div className="col-lg-3">
                {/* <Box /> */}
              </div>
              <div className="col-lg-3">
                {/* <Box /> */}
              </div>
            </div>
            <div className="row">
                <h2></h2>
                <div></div>
                <button className="ctaBtn">Download</button>
            </div>
            <div className="row">
                <h2></h2>
                <p></p>
                <div className="typography-block">Typogaphy box here</div>
            </div>
            <div className="row">
                <h3></h3>
                <p>
                </p>
            </div>
            <TermsUsage incorrectCopy="" incorrectInfo="" correctCopy="" correctInfo=""/>
            <TermsUsage incorrectCopy="" incorrectInfo="" correctCopy="" correctInfo=""/>
            <TermsUsage incorrectCopy="" incorrectInfo="" correctCopy="" correctInfo=""/>
            <TermsUsage incorrectCopy="" incorrectInfo="" correctCopy="" correctInfo=""/>
            <TermsUsage incorrectCopy="" incorrectInfo="" correctCopy="" correctInfo=""/>
            <TermsUsage incorrectCopy="" incorrectInfo="" correctCopy="" correctInfo=""/>
            <div className="row">
                <h2></h2>
                <p></p>
            </div>
            <h3></h3>
            <div className="row">
                <ColorBox name="ARC Teal" pms="229C (7421U)" cmyk="55, 98, 47, 54" rgb="07, 28, 58" hex="#189BB0"/>
                <ColorBox pms="" cmyk="" rgb="" hex=""/>
                <ColorBox pms="" cmyk="" rgb="" hex=""/>
                <ColorBox pms="" cmyk="" rgb="" hex=""/>
            </div>
            <h3></h3>
            <div className="row">
                {/* <AccordianColor /> */}
            </div>
            <h3></h3>
            <div className="row">
                {/* <AccordianColor /> */}
            </div>
            <h3></h3>
            <p></p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Visual;

var mountNode = document.getElementById("app");

ReactDOM.render(<Visual />, mountNode);
