import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout";
import TermDef from "./components/termdefinition";
import BoxArrow from "./components/boxarrow";
import TermsUsage from "./components/termusage";
import ColorBox from "./components/ColorBox";
import ColorAccordion from "./components/ColorAccordion";

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
                <h2 id="logo">Logo</h2>
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
            <TermDef
              term="Primary Logo"
              definition={
                <p>
                  The primary ARC logo appears in our brand teal and is the
                  preferred method of communication wherever possible. It is
                  important that the basic elements of our brand are represented
                  consistently across all applications. Logo artwork must never
                  be modified in scale or color outside of specific uses
                  outlined here.
                </p>
              }
            />
            <TermDef
              term="Secondary Logo With Full Company Name"
              definition={
                <div>
                  <p>
                    For secondary logo applications, the ARC logo with the full
                    company name can be used. As with our primary logo, this
                    logo can be used in regular and knock-out applications, in
                    colors from our primary brand palette of navy and teal, as
                    well as grayscale.
                  </p>
                  <p>
                    Note that the logo with full company name should not be used
                    under two inches in width. For cases under two inches, use
                    the logo without the full company name.
                  </p>
                </div>
              }
            />
            <div className="row">
              <div className="col-lg-6">{/* <Box /> */}</div>
              <div className="col-lg-6">{/* <Box /> */}</div>
            </div>
            <div className="row">
              <div className="col-lg-3">{/* <Box /> */}</div>
              <div className="col-lg-3">{/* <Box /> */}</div>
              <div className="col-lg-3">{/* <Box /> */}</div>
              <div className="col-lg-3">{/* <Box /> */}</div>
            </div>
            <h2>Logo Suite</h2>
            <div>
              Download our logo suite containing different sizes, colors and
              file types.
            </div>
            <button className="ctaBtn">Download</button>
            <div className="row">
              <h2 id="typography">Typography</h2>
              <p>
                Just as important as iconography and use of color, is the use of
                unique typography to attach a deeper meaning to your writing and
                accentuate our storytelling. Our marketing materials pair the
                modern and clean design of Source Sans with the friendly Roboto
                Slab, a combination that reflects ARC’s authority and
                approachability. The standardized fonts Arial Black and Palatino
                provide easy-to-use alternatives for our general tools and
                day-to-day communications.
              </p>
              <div className="typography-block">Typogaphy box here</div>
            </div>
            <div className="row">
              <h3>Typography Usage</h3>
              <p>
                Our brand palette serves to underscore our brand history and
                unique voice. Grounded in strategy and insights, our palette
                communicates a sense of authority, intelligence, legacy,
                decisiveness and confidence.
              </p>
            </div>
            <TermsUsage
              incorrectCopy={
                <div>
                  <h5>I am a headline</h5>
                  <p style={{ fontWeight: "bold" }}>
                    I am not a headline but I use the same weight as a headline.
                    I am not a headline but I use the same weight as a headline.
                    I am not a headline but I use the same weight as a headline.
                    I am not a headline but I use the same weight as a headline.{" "}
                  </p>
                </div>
              }
              incorrectInfo="Do not use the same weight for different levels of text hierarchy."
              correctCopy={
                <div>
                  <h5>I am a headline</h5>
                  <p>
                    I am not a headline, I am body text, and I use a different
                    weight to a headline. I am not a headline, I am body text,
                    and I use a different weight to a headline. I am not a
                    headline, I am body text, and I use a different weight to a
                    headline.
                  </p>
                </div>
              }
              correctInfo="Use differentiating weights for different sections of text heirarchy."
            />
            <TermsUsage
              incorrectCopy={
                <div>
                  <h5>I am a headline</h5>
                  <h6>I am a sub-head</h6>
                  <p>
                    I am body copy but I am the same size as the headline and
                    the sub-head{" "}
                  </p>
                </div>
              }
              incorrectInfo="Do not use the same point size for different levels of text hierarchy."
              correctCopy={
                <div>
                  <h5>I am a headline</h5>
                  <h6>I am a sub-head</h6>
                  <p>
                    I am body copy but I am the same size as the headline and
                    the sub-head
                  </p>
                </div>
              }
              correctInfo="Use differentiating weights for different sections of content."
            />
            <TermsUsage
              incorrectCopy={
                <div>
                  <h5>I am a headline</h5>
                  <h6>I am a sub-head</h6>
                  <p>
                    I am body copy but I am the same size as the headline and
                    the sub-head
                  </p>
                </div>
              }
              incorrectInfo="Do not misalign your text."
              correctCopy={
                <div>
                  <h5>I am a headline</h5>
                  <h6>I am a sub-head</h6>
                  <p>
                    I am body copy but I am the same size as the headline and
                    the sub-head
                  </p>
                </div>
              }
              correctInfo="Align your text."
            />
            <TermsUsage
              incorrectCopy={
                <div>
                  <h5>Lorem ip s um</h5>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    sed aliquam turpis, ac condimentum libero. Donec consectetur
                    congue felis quis volutpat. Etiam et pulvinar nisi.
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    sed aliquam turpis, ac condimentum libero. Donec consectetur
                    congue felis quis volutpat. Etiam et pulvinar nisi.
                  </p>
                </div>
              }
              incorrectInfo="Do not adjust the tracking or kerning of text."
              correctCopy={
                <div>
                  <h5>Lorem ip s um</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    sed aliquam turpis, ac condimentum libero. Donec consectetur
                    congue felis quis volutpat. Etiam et pulvinar nisi.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    sed aliquam turpis, ac condimentum libero. Donec consectetur
                    congue felis quis volutpat. Etiam et pulvinar nisi.
                  </p>
                </div>
              }
              correctInfo="A good rule of thumb is to keep the font’s natural tracking and kerning."
            />
            <TermsUsage
              incorrectCopy={
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  sed aliquam turpis, ac condimentum libero. Donec consectetur
                  congue felis quis volutpat. Etiam et pulvinar nisi. Vivamus
                  sollicitudin lectus quis tortor vehicula, at pretium massa
                  imperdiet.
                </p>
              }
              incorrectInfo="Do not overuse emphasis."
              correctCopy={
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  sed aliquam turpis, ac condimentum libero. Donec consectetur
                  congue felis quis volutpat. Etiam et pulvinar nisi. Vivamus
                  sollicitudin lectus quis tortor vehicula, at pretium massa
                  imperdiet.
                </p>
              }
              correctInfo="Keep copy consistent."
            />
            <TermsUsage
              incorrectCopy={
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    sed aliquam turpis, ac condimentum libero. Donec consectetur
                    congue felis quis volutpat. Etiam et pulvinar nisi. Vivamus
                    sollicitudin lectus quis tortor.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              }
              incorrectInfo="Do not set text paragraphs too wide or too narrow."
              correctCopy={
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    sed aliquam turpis, ac condimentum libero. Donec consectetur
                    congue felis quis volutpat. Etiam et pulvinar nisi. Vivamus
                    sollicitudin lectus quis tortor.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    sed aliquam turpis, ac condimentum libero. Donec consectetur
                    congue felis quis volutpat. Etiam et pulvinar nisi. Vivamus
                    sollicitudin lectus quis tortor.
                  </p>
                </div>
              }
              correctInfo="Keep paragraph width consistent and give paragraphs a comfortable amount of space on either side without making the paragraph too narrow."
            />
            <div className="row">
              <h2 id="colorPalette">Color Palette</h2>
              <p>
                Our brand palette serves to underscore our brand history and
                unique voice. Grounded in strategy and insights, our palette
                communicates a sense of authority, intelligence, legacy,
                decisiveness and confidence.
              </p>
            </div>
            <h3>Primary Colors</h3>
            <div className="row">
              <ColorBox
                name="ARC Teal"
                pms="229C (7421U)"
                cmyk="55, 98, 47, 54"
                rgb="07, 28, 58"
                hex="#189BB0"
                col="col-lg-6"
              />
              <ColorBox
                name="Tarmac"
                pms="419C (6U)"
                cmyk="72, 65, 62, 65"
                rgb="42, 43, 44"
                hex="#2A2B2C"
                col="col-lg-6"
              />
              <ColorBox
                name="Altitude Grey"
                pms="376C (375U)"
                cmyk="83, 50, 41, 14"
                rgb="49, 102, 119"
                hex="#316677"
                col="col-lg-6"
              />
              <ColorBox
                name="Flare"
                pms="227C (220U)"
                cmyk="38, 98, 31, 7"
                rgb="161, 18, 100"
                hex="#AB035C"
                col="col-lg-6"
              />
            </div>
            <h3>Secondary Colors</h3>
            <div className="row">{/* <AccordianColor /> */}</div>
            <h3>Tertiary Colors</h3>
            <div className="row">{/* <AccordianColor /> */}</div>
            <h3>Usage Proportions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              posuere lacus in lacus accumsan, at tincidunt metus efficitur.
              Vivamus fermentum ante a urna vehicula molestie.{" "}
            </p>
            <h3>Primary Colors</h3>
            <ColorAccordion />
            <h3>Secondary Colors</h3>
            {/* Secondary color block here */}
            <h3>Tertiary Colors</h3>
            {/* Tertiary Colors here */}
            <h3>Color Guidance</h3>
            <p>
              Our brand palette serves to underscore our brand history and
              unique voice. Grounded in strategy and insights, our palette
              communicates a sense of authority, intelligence, legacy,
              decisiveness and confidence.
            </p>
            <TermsUsage
              incorrectCopy={"Image here"}
              incorrectInfo="Incorrect use of brand colors. Tertiary colors should be used in small amounts as a contrast color. In addition, the background color does not offer enough contrast for the copy."
              correctCopy={"Image here"}
              correctInfo="Correct use of brand colors. Primary colors should be used as main color in collateral. This background color also offers sufficient contrast for the copy."
            />
            <h3>Animated GIF</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              posuere lacus in lacus accumsan, at tincidunt metus efficitur.
              Vivamus fermentum ante a urna vehicula molestie.
            </p>
            {/* Animated gif section */}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Visual;

var mountNode = document.getElementById("app");

ReactDOM.render(<Visual />, mountNode);
