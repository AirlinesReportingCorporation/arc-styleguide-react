import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout";
import TermsUsage from "./components/termusage";
import ButtonBox from "./components/buttonBox";
import BoxArrow from "./components/boxarrow";

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
                <h2 id="frequent">Frequently Used Terms</h2>
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
            <TermsUsage
              incorrectCopy="Expedia is an ARC Accredited agency."
              incorrectInfo=""
              correctCopy="Expedia is an ARC-accredited agency."
              correctInfo=""
            />
            <h3>ARC Board of Directors</h3>
            <div>When do we capitalize Board? Board members?</div>
            <p>
              Bonnie Reitz has historically been referred to as the “Chairman of
              the Board,” but prefers to be referred to as “Chair of the Board.”
              Please update any outdated instances as you come around them, and
              use “Chair of the Board” going forward.
            </p>

            <h3>Calls to Action</h3>
            <div className="row">
              <div className="col-lg-3">
                <ButtonBox button="Sign in" />
                <p>
                  This is the preferred term for signing in to My ARC. "Login"
                  is used to refer to the user’s credentials.
                </p>
              </div>
              <div className="col-lg-3">
                <ButtonBox button="Download" />
                <p>
                  Use only when the button generates a direct download. If there
                  is one more step to be completed, use language like "Get the
                  Report."
                </p>
              </div>
              <div className="col-lg-3">
                <ButtonBox button="Register" />
                <p>
                  Use only when the button generates a direct download. If there
                  is one more step to be completed, use language like "Get the
                  Report."
                </p>
              </div>
              <div className="col-lg-3">
                <ButtonBox button="subscribe" />
                <p>
                  Use only when the button generates a direct download. If there
                  is one more step to be completed, use language like "Get the
                  Report."
                </p>
              </div>
            </div>
            <h3>Document Names</h3>
            <p>
              When referring to general documents in a sentence (such as forms,
              calendars and applications), document names should be lowercase.
              Industrywide documents, contracts or reference guides are
              capitalized.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <ul>
                    <li>
                      For more information, view the ARC holiday calendar.
                    </li>
                    <li>
                      Please complete the attached cash security deposit program
                      form.
                    </li>
                    <li>To learn more, see the 2022 fee schedule.</li>
                  </ul>
                </div>
                <h3>Lowercase</h3>
              </div>
              <div className="col-lg-6">
                <div>
                  <ul>
                    <li>
                      Please review changes to the Agent Reporting Agreement
                      (ARA).
                    </li>
                    <li>
                      Information on chargeback management can be found in the
                      Industry Agents’ Handbook (IAH).
                    </li>
                    <li>
                      The Debit Memo Working Group developed the Best Practices
                      for Effective Debit Memo Resolution and Prevention, NDC
                      Getting Started Guide.
                    </li>
                  </ul>
                </div>
                <h3>Uppercase</h3>
              </div>
            </div>
            <h3>One Way</h3>
            <p>
              Use "one way" as a standalone adjective or adverb, but "one-way"
              as a compound modifier.
            </p>
            <TermsUsage
              incorrectCopy={
                <ul>
                  <li>One way ticket sales have remained steady.</li>
                  <li>Their flight to Paris is one-way.</li>
                </ul>
              }
              correctCopy={
                <ul>
                  <li>One-way ticket sales have remained steady.</li>
                  <li>Their flight to Paris is one way.</li>
                </ul>
              }
            />
            <h3>Product Names</h3>
            <p>
              ARC product names should be written as shown. Do not use an
              acronym or abbreviation for a product unless the product has one
              listed below.
            </p>
            <p>
              <strong>AeroGram</strong> <br />
              <strong>ARC Agency BI</strong> – “Agency BI” is acceptable on
              subsequent references or in headlines where context is clear.{" "}
              <br />
              <strong>ARC Airline BI</strong> – “Airline BI” is acceptable on
              subsequent references or in headlines where context is clear.{" "}
              <br />
              <strong>ARC Data Connect</strong> <br />
              <strong> ARC Direct Connect</strong> <br />
              <strong> ARC Pay</strong> – Always written as “ARC Pay,” never
              just “Pay.” <br />
              <strong>ARC Risk Check</strong> <br />
              <strong>Aria</strong> <br />
              <strong>Custom Reports</strong> <br />
              <strong>Direct Data Solutions (DDS)</strong> <br />
              <strong>Memo Analyzer</strong> – If needed, “Memo Analyzer for
              Agencies” or “Memo Analyzer for Airlines” can be specified. <br />
              <strong>Memo Manager </strong>
              <br />
              <strong>Revenue Analysis Reports</strong> <br />
              <strong> Revenue Recovery Services</strong> <br />
            </p>

            <h3>Round Trip</h3>
            <p>
              Use "round trip" as a noun, and "round-trip" as a compound
              modifier when describing another noun.
            </p>
            <TermsUsage
              incorrectCopy={
                <ul>
                  <li>They took a roundtrip to New York and back</li>
                  <li>They took a round-trip to New York and back.</li>
                  <li>The volume of roundtrip tickets increased last year.</li>
                  <li>The volume of round trip tickets increased last year</li>
                </ul>
              }
              correctCopy={
                <ul>
                  <li>They took a round trip to New York and back.</li>
                  <li>The volume of round-trip tickets increased last year.</li>
                </ul>
              }
            />
            <h3>Team Names</h3>
            <p>
              Use lowercase for team names, with the exception of formal points
              of contact such as the Customer Care Center and Airline Help Desk.
            </p>
            <TermsUsage
              incorrectCopy={
                <ul>
                  <li>ARC’s Marketing Team created the writing style guide.</li>
                  <li>
                    If you have any questions about the tool, contact the
                    customer care center.
                  </li>
                </ul>
              }
              correctCopy={
                <ul>
                  <li>ARC’s marketing team created the writing style guide.</li>
                  <li>
                    If you have any questions about the tool, contact the
                    Customer Care Center.
                  </li>
                </ul>
              }
            />
            <h3>Titles</h3>
            <p>
              When used in a sentence, capitalize a professional title only when
              it appears before the person’s name. If the title appears after
              the name, it is lowercase.
            </p>
            <TermsUsage
              incorrectCopy={
                <ul>
                  <li>
                    Lauri Reishus is ARC’s President and Chief Executive
                    Officer.
                  </li>
                  <li>
                    The video features an interview with ARC’s president and
                    chief executive officer, Lauri Reishus.
                  </li>
                </ul>
              }
              correctCopy={
                <ul>
                  <li>
                    Lauri Reishus is ARC’s president and chief executive
                    officer.
                  </li>
                  <li>
                    The video features an interview with ARC’s President and
                    Chief Executive Officer, Lauri Reishus.
                  </li>
                </ul>
              }
            />
            <p>
              Never capitalize a job title that stands alone, no matter how
              important it seems.
            </p>
            <TermsUsage
              incorrectCopy={
                <ul>
                  <li>The President signed the bill.</li>
                </ul>
              }
              correctCopy={
                <ul>
                  <li>The president signed the bill.</li>
                </ul>
              }
            />
            <p>
              Most job descriptions are not considered titles and are not
              capitalized: astronaut John Glenn, actor Zac Efron, teacher Nancy
              Hanson.
            </p>
            <TermsUsage
              incorrectCopy={
                <ul>
                  <li>
                    The event will feature a Q&A with Airline Pilot Sally Smith.
                  </li>
                </ul>
              }
              correctCopy={
                <ul>
                  <li>
                    The event will feature a Q&A with airline pilot Sally Smith.
                  </li>
                </ul>
              }
            />
            <h3>Abbreviations</h3>
            <p>
              Formal titles are those that denote a scope of authority,
              professional rank or academic rank: professor, judge, mayor,
              doctor, emperor. Remember, they’re capitalized when used with a
              proper name, but not when used alone. Most formal titles are not
              abbreviated when used with a proper name. Only a few titles can be
              abbreviated: Gov., Lt. Gov., Sen., Rep., Dr., the Rev., most
              military and law enforcement titles. Never abbreviate president or
              vice president.
            </p>
            <h3>Courtesy Titles</h3>
            <p>
              Both men and women are introduced by their first and last names —
              without a courtesy title — on the first reference. Subsequent
              references use their last name only. Do not use courtesy titles
              (Mr., Ms.) unless they appear in direct quotations.
            </p>
            <TermsUsage
              incorrectCopy={
                <ul>
                  <li>
                    Ms. Jones will moderate the panel on airline distribution.
                  </li>
                </ul>
              }
              correctCopy={
                <ul>
                  <li>
                    First reference: Rachel Jones will moderate the panel on
                    airline distribution.
                  </li>
                  <li>
                    Later references: Jones will moderate the panel on airline
                    distribution.
                  </li>
                </ul>
              }
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Landing;

var mountNode = document.getElementById("app");

ReactDOM.render(<Landing />, mountNode);
