import React, { Component } from "react";
import BoxArrow from "./components/boxarrow";
import BoxArrowSmall from "./components/boxarrowsmall";
import BottomPageNav from "./components/BottomPageNav";
import {
  baseLink,
  ourBrandLink,
  visualIdentityLink,
  writingStyleGuideLink,
  webStyleGuideLink,
} from "./links";

import Layout from "./components/layout";
import TermsUsage from "./components/termusage";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout active="our-brand">
        <div className="bg-color-white">
          <img
            src="https://www2.arccorp.com/globalassets/styleguide/images/masthead.png"
            className="masthead-landing"
            alt=""
          />
          <div className="content-area">
            <div>
              <h1>Our Brand</h1>
              <p className="our-brand-subtitle">
                ARC’s brand style guide provides a comprehensive view of ARC’s
                identity, including messaging, graphics, code and writing style.
                This guide was created for ARC employees, contractors and
                industry partners to produce compelling, effective experiences
                for a variety of audiences.{" "}
              </p>
            </div>
            <h2 className="style-guide-h2">Frequently Requested Assets</h2>
            <div className="row">
              <div className="col-lg-6">
                <BoxArrowSmall
                  link="https://www2.arccorp.com/globalassets/styleguide/arc-logo-suite.zip"
                  copy="Logos"
                />
              </div>
              <div className="col-lg-6">
                <BoxArrowSmall
                  link="https://arccorp365.sharepoint.com/sites/Marketing/SitePages/Brand-Resources.aspx"
                  copy="Icons for Presentations"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <BoxArrowSmall
                  link="https://arccorp365.sharepoint.com/sites/Marketing/PPT%20Images/Forms/Thumbnail%20View.aspx"
                  copy="Approved Photo Library"
                />
              </div>
              <div className="col-lg-6">
                <BoxArrowSmall
                  link="https://arccorp365.sharepoint.com/:f:/r/sites/Marketing/Brand%20Resources/Presentations?csf=1&web=1&e=2OlRRj"
                  copy="Presentation Templates"
                />
              </div>
            </div>
            <h2 className="style-guide-h2">Explore Our Style Guide</h2>
            <div className="explore-styleguide-row">
              <div className="row no-gutters ">
                <div className="col-lg-4">
                  <BoxArrow
                    link={ourBrandLink}
                    copy="Using Our Brand"
                    titleWidth="170px"
                    image="https://www2.arccorp.com/globalassets/styleguide/styleguide-using-brand.png?1"
                  />
                </div>
                <div className="col-lg-4">
                  <BoxArrow
                    link={visualIdentityLink}
                    copy="Visual Identity"
                    titleWidth="150px"
                    image="https://www2.arccorp.com/globalassets/styleguide/styleguide-visual-identity.png"
                  />
                </div>
                <div className="col-lg-4">
                  <BoxArrow
                    link={writingStyleGuideLink}
                    copy="Writing Style Guide"
                    image="https://www2.arccorp.com/globalassets/styleguide/styleguide-writing.png/"
                  />
                </div>
                <div className="col-lg-4">
                  <BoxArrow
                    link={webStyleGuideLink}
                    copy="Web Style Guide"
                    image="https://www2.arccorp.com/globalassets/styleguide/styleguide-web.png"
                  />
                </div>
                <div className="col-lg-4">
                  <BoxArrow
                    link="https://flightds.netlify.com"
                    copy="Flight Design System"
                    image="https://www2.arccorp.com/globalassets/styleguide/styleguide-flight.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <BottomPageNav nextLink={ourBrandLink} nextName="Using Our Brand" />
        </div>
      </Layout>
    );
  }
}

export default App;
