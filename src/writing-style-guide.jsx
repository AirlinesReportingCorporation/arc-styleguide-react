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
        <div className="styleguide-doc-section styleguide-doc-header border-bottom">
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
                <div className="inner-document-names">
                  <ul className="inner-document-list">
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
                <div className="inner-document-names">
                  <ul className="inner-document-list">
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
                <h3 className="inner-document-casing">Uppercase</h3>
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
            <h3>Transformation</h3>
            <p>
              Because digital transformations are not exclusive to ARC,
              "transformation," should be lowercase.
            </p>
            <TermsUsage
              incorrectCopy={
                <ul>
                  <li>
                    ARC’s Transformation will increase efficiency and
                    flexibility for the air travel industry.
                  </li>
                </ul>
              }
              correctCopy={
                <ul>
                  <li>
                    ARC’s transformation will increase efficiency and
                    flexibility for the air travel industry.
                  </li>
                </ul>
              }
            />
            <h3>Travel Agency</h3>
            <p>
              To provide context to the reader, use the full term "travel
              agency" on first use. After that, simplifying to "agent" or
              "agency" is fine. Use "agency" when referring to the business. Use
              "agent" when referring to an individual selling travel.
            </p>
            <p>
              The IAH, ARA and any official or legal documentation are
              exceptions, which use the term "Agent" to refer to contractual
              agreements with an agency.
            </p>
            <h3>U.S.</h3>
            <p>
              Use the abbreviation U.S. when referring to the United States.
            </p>
            <h2>Formatting Dates, Times, and Figures</h2>
            <h3>Dates and Date Ranges</h3>
            <p>
              In most cases, spell out the date without the day of the week:
              January 1, 2023. If the day of the week is important, write as:
              Sunday, January 1, 2023.
            </p>
            <p>
              Period-ending dates are an exception and use the MM/DD/YY format
              (PED 01/01/23). Use a hyphen without spaces to indicate date
              ranges. For date ranges within the same month, only list the month
              once.
            </p>
            <TermsUsage
              incorrectCopy={
                <div>
                  <ul>
                    <li>January 7-January 20, 2023</li>
                  </ul>
                </div>
              }
              correctCopy={
                <div>
                  <ul>
                    <li>January 7-20, 2023</li>
                    <li>January 7-February 5, 2023</li>
                  </ul>
                </div>
              }
            />
            <h3>Decimals</h3>
            <p>
              When using decimals, simplify as much as possible to suit the
              context. As a general rule, do not exceed two decimal places.
              Decimals can also be used to consolidate numbers in the millions
              and billions.
            </p>
            <TermsUsage
              incorrectCopy={
                <div>
                  <ul>
                    <li>
                      ARC processed $4.969 million in credit card sales in
                      December 2018.
                    </li>
                  </ul>
                </div>
              }
              correctCopy={
                <div>
                  <p>
                    The consolidated dollar value of airline tickets sold by
                    U.S.-based travel agencies increased more than 5 percent in
                    November as compared to November 2017, totaling $7.1 billion
                    vs. $6.8 billion.
                  </p>
                  <p>
                    ARC processed $4.97 million in credit card sales in December
                    2018.
                  </p>
                  <p>
                    ARC processed nearly $5 million in credit card sales in
                    December 2018.
                  </p>
                  <p>
                    Good, but could be simplified: In 2017, the chargeback debit
                    memo to credit card sales ratio decreased to 0.048 percent.
                  </p>
                </div>
              }
            />
            <h3>Numerals</h3>
            <p>When used in a sentence, spell out one through nine. Use numerals for 10 and above. Use figures for:</p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>Addresses (5 Sixth Ave.)</li>
                  <li>Ages (3 years old)</li>
                  <li>Charts, labels and graphs</li>
                  <li>Dates, years and decades (April 1, Class of '95)</li>
                  <li>Currency ($5, $0.50)</li>
                  <li>Millions, billions (4 billion, $50 million)</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>Plane designations (B-2 bomber, Airbus 330-200)</li>
                  <li>Decimals, percentages and fractions with numbers larger than 1 (7.2 magnitude earthquake, 7.1 percent increase)</li>
                  <li>Dimensions and distances (4 miles, 8 feet)</li>
                  <li>Sequential designations (Page 1, ARA Section 6)</li>
                  <li>Time of Day (a 1 p.m. webinar)</li>
                </ul>
              </div>
            </div>
            <h3>Phone Numbers</h3>
            <p>Do not use the U.S. country code prefix (1) in phone numbers unless it is necessary for an international audience. Only use prefixes when necessary for international numbers (such as a new participating airline that does not have an office in the U.S.). Phone numbers should include dashes instead of periods, with the exception of designed documents. letterhead and signatures</p>
            <ul>
              <li>In TAC: “Contact ARC’s Customer Care Center at 855-816-8003.”</li>
              <li>In TAC: “For inquiries, reservations and sales information, contact InselAir at +599-9-737-0444.”</li>
              <li>In an email to a European airline: “If you have any questions, contact 1-703-816-8000.”</li>
            </ul>
            <h3>Percent</h3>
            <p>Use the percent symbol (%) with a number, with no space (e.g., 3%).</p>
            <h3>Time</h3>
            <p>Use lowercase a.m. and p.m. with periods after each. When writing a time on the hour, just use the number without :00. When referencing 12:00, use “noon” or “midnight” for clarity.</p>
            <TermsUsage incorrectCopy={<ul><li>The networking event begins at 7:00pm.</li><li>Join us for lunch at 12:00 p.m.</li></ul>} correctCopy={<ul><li>The networking event begins at 7 p.m.</li><li>Join us for lunch at noon.</li></ul>}/>
            <p>For timeframes, join the two numbers with a hyphen, without spaces. Only include one reference of a.m. or p.m., unless it spans both.</p>
            <TermsUsage incorrectCopy={<ul><li>The webinar will take place Tuesday 1 p.m.-2 p.m.</li></ul>} correctCopy={<ul><li>The webinar will take place Tuesday 1-2 p.m.</li><li>The training session will take place 10 a.m.-3 p.m.</li></ul>}/>
          <h3>Time Zones</h3>
          <p>For webinars and specific events, use EST or EDT to reflect Eastern Standard Time and Eastern Daylight Time, respectively. When listing year-round hours (e.g., hours of operation or phone support), use ET to reflect Eastern Time.</p>
          <h2>Grammar & Punctuation</h2>
          <h3>Ampersand (&)</h3>
          <p>Ampersands should not be used as part of a sentence, unless you’re referring to an official company name that uses one (“at&t”). Instead, spell out the word “and.” Ampersands may be used in a headline where brevity is necessary for design purposes.</p>
          <h3>Capitalization</h3>
          <p>Apply standard capitalization rules to content. Capitalize the first word of a sentence, as well as proper nouns such as names, products, organizations and industry events.</p>
          <h3>Headlines & Titles</h3>
          <p>Capitalize the first word of the title, the last word of the title, and all “principal” words (nouns, pronouns, verbs, adverbs, adjectives, subordinating conjunctions, prepositions used adjectivally or adverbially) and all words longer than three letters. This also applies to document, chart and PowerPoint slide titles</p>
          <TermsUsage incorrectCopy={<ul><li>Meet the customer of the future</li><li>Meet The Customer Of The Future</li></ul>} correctCopy={<ul><li>Meet the Customer of the Future</li></ul>}/>
          <h3>Ellipsis</h3>
          <p>As a general rule, do not use ellipsis.</p>
          <h3>Hyphens</h3>
          <p>Use hyphens to join two words or create compound modifiers. Do not add spaces before or after a hyphen. Do not hyphenate adverbs ending in "-ly."</p>
          <TermsUsage incorrectCopy={<ul><li>Friendship is a two way street.</li><li>Expedia is a well known online travel agency</li></ul>} correctCopy={<ul><li>Friendship is a two-way street.</li><li>Expedia is a well-known online travel agency</li></ul>}/>
          
          <h3>Prefixes</h3>
          <p>Generally, do not hyphenate when using a prefix with a word starting with a consonant. Use a hyphen if the word that follows is capitalized.</p>
          <h3>Dashes</h3>
          <p>Use em dashes (—) for emphasis in a sentence, or to set off a phrase. Use a space before and after the dash.</p>
          <TermsUsage incorrectCopy={<ul><li>Transformation isn’t exclusive to technology - it permeates the entire organization.</li><li>Transformation isn’t exclusive to technology—it permeates the entire organization.</li></ul>} correctCopy={<ul><li>Transformation isn’t exclusive to technology — it permeates the entire organization.</li></ul>}/>
          <h3>Serial Comma</h3>
          <p>Per AP Style, ARC does not use the serial comma. This means that in a series or list of three or more items, the final two items are not separated by a comma unless one is needed for clarity.</p>
          <TermsUsage incorrectCopy={<ul><li>ARC helps airlines and travel agencies connect, grow, and thrive.</li><li>ARC has office locations in Arlington, Louisville, and Tampa.</li></ul>} correctCopy={<ul><li>ARC helps airlines and travel agencies connect, grow and thrive.</li><li>ARC has office locations in Arlington, Louisville and Tampa.</li></ul>}/>
          <h3>Verb Tense and Person</h3>
          <p>Use active verbs rather than passive wherever possible. Avoid first-person verbs in external ARC communications such as articles, notifications, blog posts, etc., unless the communication is from an individual (e.g., an article or column from a subject matter expert on LinkedIn).</p>
          <TermsUsage incorrectCopy={<ul><li>The brand and style guide was used by the entire company.</li><li>We implemented enhancements to Memo Manager.</li></ul>} correctCopy={<ul><li>The entire company used the brand and style guide.</li><li>ARC implemented enhancements to Memo Manager.</li></ul>}/>
        </div>
        </div>
      </Layout>
    );
  }
}

export default Landing;

var mountNode = document.getElementById("app");

ReactDOM.render(<Landing />, mountNode);
