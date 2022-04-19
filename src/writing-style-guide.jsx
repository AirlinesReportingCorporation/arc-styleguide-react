import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout";
import TermsUsage from "./components/termusage";

class Landing extends Component {
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
                <h1>Writing Style Guide</h1>
                <p class="styleguide-doc-subtitle">
                  Consistent, clear writing is a reflection of the ARC brand. We
                  want customers to trust ARC, understand what we represent and
                  be confident in our solutions. That starts with a clear,
                  engaging experience with our content across every channel.
                </p>
                <p class="styleguide-doc-subtitle">
                  ARC's house style and key guidelines are listed below. For any
                  writing guidelines not reflected here, please use The
                  Associated Press Stylebook (AP style) or check with the
                  Marketing team.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="styleguide-doc-section">
          <div className="styleguide-doc-inner">
            <div className="row">
              <div className="col-lg-12">
                <h2>Frequently Used Terms</h2>
                <h3>Abbreviations and Acronyms</h3>
                <p>
                  For most abbreviations or acronyms, define the full name on
                  first reference with the abbreviation or acronym in
                  parentheses. The abbreviation or acronym can then be used
                  alone in subsequent references.
                </p>
                <p>
                  An exception to the rule above is “ARC,” which can be
                  abbreviated on first reference except in press releases or
                  when the full name is needed for context. The only other
                  exceptions are very commonly known acronyms listed in AP Style
                  (COVID, FBI, U.S.), which do not need to be written out.
                </p>
                <p>
                  For ARC products, ensure your abbreviation or acronym is
                  customer-facing and not just internal. Abbreviations and
                  acronyms we use include:
                  <ul>
                    <li>Direct Data Solutions (DDS)</li>
                  </ul>
                </p>
                <p>
                  Headlines and titles may include commonly used abbreviations,
                  but the text should introduce the acronym's definition in the
                  first few sentences. Do not use airline codes as abbreviations
                  in formal external content.{" "}
                </p>

                <TermsUsage
                  incorrectCopy={
                    <ol>
                      <li>
                        ARC's Board of Directors approved a number of changes to
                        the ARA.
                      </li>
                      <li>
                        ARC piloted its enhanced settlement capabilities with
                        BA.
                      </li>
                    </ol>
                  }
                  correctCopy={
                    <ol>
                      <li>
                        ARC's Board of Directors approved a number of changes to
                        the Agent Reporting Agreement <strong>(ARA)</strong>.
                      </li>
                      <li>
                        ARC piloted its enhanced settlement capabilities with{" "}
                        <strong>British Airways</strong>.
                      </li>
                    </ol>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="styleguide-doc-section">
          <div className="styleguide-doc-inner">
            <div className="row">
              <div className="col-lg-12">
                <h3>Airline Names</h3>
                <h4>ARC Board Airlines</h4>
                <p>
                  <strong>Air Canada</strong> – Always written as “Air Canada.”
                  <br />
                  <strong>Alaska Airlines</strong> – May be written as “Alaska”
                  after first reference and when space is limited, as long as
                  context makes it clear you’re not referring to the state name.
                  <br />
                  <strong>American Airlines</strong> – May be written as
                  “American” after first reference and when space is limited, as
                  long as context makes it clear you’re not referring to the
                  nationality.
                  <br />
                  <strong>Delta Air Lines</strong> – Note that this airline
                  formats “Air Lines” as two words. May be written as “Delta”
                  after first reference and when space is limited.
                  <br />
                  <strong>Hawaiian Airlines</strong> – May be written as
                  “Hawaiian” after first reference and when space is limited, as
                  long as context makes it clear you’re not referring to the
                  demonym.
                  <br />
                  <strong>JetBlue Airways</strong> – May be written as “JetBlue”
                  after first reference and when space is limited.
                  <br />
                  <strong>Southwest Airlines</strong> - May be written as
                  “Southwest” after first reference and when space is limited,
                  as long as context makes it clear you’re not referring to the
                  direction.
                  <br />
                  <strong>United Airlines</strong> – May be written as after
                  “United” after first reference and when space is limited.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="styleguide-doc-section">
          <div className="styleguide-doc-inner">
            <div className="row">
              <div className="col-lg-12">
                <h3>ARC Accreditation</h3>
                <p>
                  Capitalize “ARC Accreditation” as you would a product, but
                  when referencing "accreditation" generally, or
                  "ARC-accredited," use lowercase.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="styleguide-doc-section">
          <div className="styleguide-doc-inner">
            <div className="row">
              <div className="col-lg-12">
                <h3>ARC-accredited agency</h3>
                <p>Use the hyphen, as "ARC-accredited" modifies "agency."</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Landing;

var mountNode = document.getElementById("app");

ReactDOM.render(<Landing />, mountNode);
