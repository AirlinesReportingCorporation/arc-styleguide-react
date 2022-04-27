import React, { Component } from "react";
import BoxArrow from "./components/boxarrow";
import BoxArrowSmall from "./components/boxarrowsmall";
import ButtonBox from "./components/buttonBox";

import Layout from "./components/layout";
import TermsUsage from "./components/termusage";

class App extends Component {
  constructor() {
    super();
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
            <div className="row">
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
            <h2 className="style-guide-h2">Explore Our Style Guide</h2>
            <div className="explore-styleguide-row">
              <div className="row no-gutters ">
                <div className="col-lg-4">
                  <BoxArrow
                    link="/our-brand.html"
                    copy="Using the ARC Brand"
                    titleWidth="170px"
                    image="https://www2.arccorp.com/globalassets/styleguide/styleguide-using-brand.png?1"
                  />
                </div>
                <div className="col-lg-4">
                  <BoxArrow
                    link="/visual-identity.html"
                    copy="ARC's Visual Identity"
                    titleWidth="150px"
                    image="https://www2.arccorp.com/globalassets/styleguide/styleguide-visual-identity.png"
                  />
                </div>
                <div className="col-lg-4">
                  <BoxArrow
                    link="/writing-style-guide.html"
                    copy="Writing Style Guide & Best Practices"
                    image="https://www2.arccorp.com/globalassets/styleguide/styleguide-writing.png/"
                  />
                </div>
                <div className="col-lg-4">
                  <BoxArrow
                    link="/web-style-guide.html"
                    copy="Web Style Guide"
                    image="https://www2.arccorp.com/globalassets/styleguide/styleguide-web.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default App;
