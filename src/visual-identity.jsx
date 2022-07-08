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
import BottomPageNav from "./components/BottomPageNav";

class Visual extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout active="style-guide">
        <div className="styleguide-doc-section styleguide-doc-header border-bottom">
          <div className="styleguide-doc-inner">
            <div className="row">
              <div className="col-12">
                <h1>Visual Identity</h1>
                <p className="styleguide-doc-subtitle">
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
            <div className="row">
              <div className="col-lg-6">
                <div className="logo-box lg">
                  <img
                    src="https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-l-teal.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="logo-box sm">
                  <img
                    src="https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-l-teal.png"
                    alt=""
                  />
                </div>
                <div className="logo-box sm">
                  <img
                    src="https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-l-gray.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="logo-box sm">
                  <img
                    src="https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-l-black.png"
                    alt=""
                  />
                </div>
                <div className="logo-box sm gray">
                  <img
                    src="https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-l-white.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <TermDef
              term="Secondary Logo With Full Company Name"
              width="195px"
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
              <div className="col-lg-6">
                <div className="logo-box lg">
                  <img
                    src="https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-l-teal-tag.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="logo-box sm">
                  <img
                    src="https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-l-teal-tag.png"
                    alt=""
                  />
                </div>
                <div className="logo-box sm">
                  <img
                    src="https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-l-gray-tag.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="logo-box sm">
                  <img
                    src="https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-l-black-tag.png"
                    alt=""
                  />
                </div>
                <div className="logo-box sm gray">
                  <img
                    src="https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-l-white-tag.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="styleguide-doc-section">
          <div className="styleguide-doc-inner">
            <h3>Logo Suite</h3>
            <div>
              Download our logo suite containing different sizes, colors and
              file types.
            </div>
            <button
              href="https://www2.arccorp.com/globalassets/styleguide/arc-logo-suite.zip"
              className="ctaBtn"
            >
              Download
            </button>
          </div>
        </div>
        <div className="styleguide-doc-section">
          <div className="styleguide-doc-inner">
            <div className="row">
              <div className="col-lg-12">
                <h2 id="typography">Typography</h2>
                <p>
                  Just as important as iconography and use of color, is the use
                  of unique typography to attach a deeper meaning to your
                  writing and accentuate our storytelling. Our marketing
                  materials pair the modern and clean design of Source Sans that
                  reflects ARC’s authority and approachability. The standardized
                  fonts Arial Black and Calibri provide easy-to-use alternatives
                  for our general tools and day-to-day communications.
                </p>
                <div className="typography-block">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="typography-block-header">
                        Source Sans Pro
                      </div>
                      <p>For sales materials, online presense</p>
                      <div className="typography-block-subheader">Light</div>
                      <p className="typography-block-light">
                        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                        <br />a b c d e f g h i j k l m n o p q r s t u v w x y
                        z
                      </p>
                      <div className="typography-block-subheader">Semibold</div>
                      <p className="typography-block-semibold">
                        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                        <br />a b c d e f g h i j k l m n o p q r s t u v w x y
                        z
                      </p>
                      <div className="typography-block-header typography-calibri">
                        Calibri
                      </div>
                      <p>For Powerpoint presentations</p>
                      <div className="typography-block-subheader typography-calibri">
                        Light
                      </div>
                      <p className="typography-calibri-light">
                        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                        <br />a b c d e f g h i j k l m n o p q r s t u v w x y
                        z
                      </p>
                      <div className="typography-block-subheader typography-calibri">
                        Semibold
                      </div>
                      <p className="typography-calibri-semibold">
                        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                        <br />a b c d e f g h i j k l m n o p q r s t u v w x y
                        z
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <div className="typography-block-subheader">Regular</div>
                      <p>
                        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                        <br />a b c d e f g h i j k l m n o p q r s t u v w x y
                        z
                      </p>
                      <div className="typography-block-subheader">Bold</div>
                      <p className="typography-block-bold">
                        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                        <br />a b c d e f g h i j k l m n o p q r s t u v w x y
                        z
                      </p>
                      <div className="typography-block-subheader">Black</div>
                      <p className="typography-block-black">
                        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                        <br />a b c d e f g h i j k l m n o p q r s t u v w x y
                        z
                      </p>
                      <div className="typography-block-header typography-calibri">
                        Arial Black
                      </div>
                      <p>
                        For emails, document For emails, documents,
                        presentations, web fallbacks
                      </p>
                      <p className="typography-arial-black">
                        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                        <br />a b c d e f g h i j k l m n o p q r s t u v w x y
                        z
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="styleguide-doc-section">
          <div className="styleguide-doc-inner">
            <div className="row">
              <div className="col-lg-12">
                <h3>Typography Usage</h3>
                <p>
                  Our brand palette serves to underscore our brand history and
                  unique voice. Grounded in strategy and insights, our palette
                  communicates a sense of authority, intelligence, legacy,
                  decisiveness and confidence.
                </p>
              </div>
            </div>
            <TermsUsage
              incorrectCopy={
                <div>
                  <div className="termusage-header">I am a headline</div>
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
                  <div className="termusage-header">I am a headline</div>
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
                  <div className="termusage-header">I am a headline</div>
                  <div className="termusage-sub" style={{ fontSize: "32px" }}>
                    I am a sub-head
                  </div>
                  <p style={{ fontSize: "32px" }}>
                    I am body copy but I am the same size as the headline and
                    the sub-head{" "}
                  </p>
                </div>
              }
              incorrectInfo="Do not use the same point size for different levels of text hierarchy."
              correctCopy={
                <div>
                  <div className="termusage-header">I am a headline</div>
                  <div className="termusage-sub">I am a sub-head</div>
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
                  <div className="termusage-header">I am a headline</div>
                  <div
                    className="termusage-sub"
                    style={{ position: "relative", left: "-25px" }}
                  >
                    I am a sub-head
                  </div>
                  <div className="termusage-p">
                    I am body copy but I am the same size as the headline and
                    the sub-head
                  </div>
                </div>
              }
              incorrectInfo="Do not misalign your text."
              correctCopy={
                <div>
                  <div className="termusage-header">I am a headline</div>
                  <div className="termusage-sub">I am a sub-head</div>
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
                  <div className="termusage-header">
                    Lo<span style={{ letterSpacing: "-6.6px" }}>re</span>m ip s{" "}
                    <span style={{ letterSpacing: "-6.6px" }}>um</span>
                  </div>
                  <div
                    className="termusage-semibold-lorem"
                    style={{ letterSpacing: "-1.76px" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    sed aliquam turpis, ac condimentum libero. Donec consectetur
                    congue felis quis volutpat. Etiam et pulvinar nisi.
                  </div>
                  <p
                    className="termusage-semibold-lorem"
                    style={{ letterSpacing: "3.2px" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    sed aliquam turpis, ac condimentum libero. Donec consectetur
                    congue felis quis volutpat. Etiam et pulvinar nisi.
                  </p>
                </div>
              }
              incorrectInfo={<p style={{height:"45px"}}>"Do not adjust the tracking or kerning of text."</p>}
              correctCopy={
                <div>
                  <div className="termusage-header">Lorem ipsum</div>
                  <p className="termusage-semibold-lorem">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    sed aliquam turpis, ac condimentum libero. Donec consectetur
                    congue felis quis volutpat. Etiam et pulvinar nisi.
                  </p>
                  <p className="termusage-semibold-lorem">
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
                  Lorem <span style={{ fontSize: "large" }}>ipsum</span> dolor
                  sit amet,{" "}
                  <span style={{ fontSize: "large" }}>consectetur</span>{" "}
                  adipiscing elit. Ut sed aliquam turpis, ac{" "}
                  <span className="termusage-semibold-lorem">condimentum</span>{" "}
                  libero. <strong>Donec</strong> consectetur congue felis quis
                  volutpat. <u>Etiam et pulvinar</u> nisi.{" "}
                  <span style={{ fontSize: "large" }}>Vivamus</span>
                  sollicitudin lectus quis tortor vehicula,{" "}
                  <span style={{ fontSize: "large" }}>
                    at pretium massa imperdiet.
                  </span>
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
                <div style={{ position: "relative", left: "-30px" }}>
                  <p style={{ width: "365px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    sed aliquam turpis, ac condimentum libero. Donec consectetur
                    congue felis quis volutpat. Etiam et pulvinar nisi. Vivamus
                    sollicitudin lectus quis tortor.
                  </p>
                  <p style={{ width: "85px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              }
              incorrectInfo={<p style={{height: "65px"}}>Do not set text paragraphs too wide or too narrow.</p>}
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
          </div>
        </div>
        <div className="styleguide-doc-section">
          <div className="styleguide-doc-inner">
            <div className="row">
              <div className="col-lg-12">
                <h2 id="colorPalette">Color Palette</h2>
                <p>
                  Our brand palette serves to underscore our brand history and
                  unique voice. Grounded in strategy and insights, our palette
                  communicates a sense of authority, intelligence, legacy,
                  decisiveness and confidence.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <h3>Primary Colors</h3>
              </div>
            </div>
            <div className="row">
              <ColorBox
                name="ARC Teal"
                pms="7711C (7712U)"
                cmyk="79, 21, 27, 0"
                rgb="24, 155, 176"
                hex="#189BB0"
                col="col-lg-6"
              />
              <ColorBox
                name="Tarmac"
                pms="000C (000U)"
                cmyk="72, 65, 62, 65"
                rgb="42, 43, 44"
                hex="#2A2B2C"
                col="col-lg-6"
              />
              <ColorBox
                name="Altitude Grey"
                pms="Cool Gray 2C
                (Cool Gray 2U)"
                cmyk="16, 12, 13, 0"
                rgb="212, 212, 212"
                hex="#D4D4D4"
                col="col-lg-6"
              />
              <ColorBox
                name="Flare"
                pms="000C (000U)"
                cmyk="0, 96, 29, 0"
                rgb="255, 27, 113"
                hex="#FF1B71"
                col="col-lg-6"
              />
            </div>
            <div className="row">
              <div className="col-lg-12">
                <h3>Secondary Colors</h3>
                <ColorAccordion
                  colors={[
                    {
                      name: "Concourse",
                      pms: "3155C (3155U)",
                      cmyk: "83, 50, 41, 14",
                      rgb: "49, 102, 119",
                      hex: "#316677",
                    },
                    {
                      name: "Flap 3",
                      pms: "7501C (7501U)",
                      cmyk: "24, 25, 45, 0",
                      rgb: "198, 181, 147",
                      hex: "#C6B593",
                    },
                    {
                      name: "Fuselage",
                      pms: "Coll Gray 10C (426U)",
                      cmyk: "0, 0, 0, 70",
                      rgb: "109, 110, 113",
                      hex: "#6D6E71",
                    },
                  ]}
                />
                <h3>Tertiary Colors</h3>
                <ColorAccordion
                  colors={[
                    {
                      name: "Night Shade",
                      pms: "5265C (2768U)",
                      cmyk: "82, 79, 42, 36",
                      rgb: "56, 53, 82",
                      hex: "#383552",
                    },
                    {
                      name: "Signal Orange",
                      pms: "000C (000U)",
                      cmyk: "0, 62, 100, 0",
                      rgb: "247, 127, 0",
                      hex: "#F77F00",
                    },
                    {
                      name: "Airfield",
                      pms: "000C (000U)",
                      cmyk: "51, 0, 100, 0",
                      rgb: "138, 201, 38",
                      hex: "#8AC926",
                    },
                  ]}
                />
                <h3>Usage Proportions</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam posuere lacus in lacus accumsan, at tincidunt metus
                  efficitur. Vivamus fermentum ante a urna vehicula molestie.{" "}
                </p>
                <h3>Primary Colors</h3>
                <div className="proportion-block-container">
                  <div className="row no-gutter no-gutters">
                    <div className="col-lg-7">
                      <div className="proportion-block-1 proportion-block"></div>
                    </div>
                    <div className="col-lg-2">
                      <div className="proportion-block-2 proportion-block"></div>
                    </div>
                    <div className="col-lg-2">
                      <div className="proportion-block-3 proportion-block"></div>
                    </div>
                    <div className="col-lg-1">
                      <div className="proportion-block-4 proportion-block"></div>
                    </div>
                  </div>
                </div>

                <h3>Secondary Colors</h3>
                <div className="proportion-block-container-sm">
                  <div className="row no-gutters">
                    <div className="col-4">
                      <div className="proportion-block-5  proportion-block-small"></div>
                    </div>
                    <div className="col-4">
                      <div className="proportion-block-6 proportion-block-small"></div>
                    </div>
                    <div className="col-4">
                      <div className="proportion-block-7 proportion-block-small"></div>
                    </div>
                  </div>
                </div>
                <h3>Tertiary Colors</h3>
                <div className="proportion-block-container-sm">
                  <div className="row no-gutters">
                    <div className="col-2">
                      <div className="proportion-block-8 proportion-block-smaller"></div>
                    </div>
                    <div className="col-2">
                      <div className="proportion-block-9 proportion-block-smaller"></div>
                    </div>
                    <div className="col-2">
                      <div className="proportion-block-10 proportion-block-smaller"></div>
                    </div>
                  </div>
                </div>
                <h3>Color Guidance</h3>
                <p>
                  Our brand palette serves to underscore our brand history and
                  unique voice. Grounded in strategy and insights, our palette
                  communicates a sense of authority, intelligence, legacy,
                  decisiveness and confidence.
                </p>
              </div>
            </div>

            <TermsUsage
              images={true}
              incorrectCopy={
                <img src="https://www2.arccorp.com/globalassets/styleguide/color-guidance1.png" />
              }
              incorrectInfo="Incorrect use of brand colors. Tertiary colors should be used in small amounts as a contrast color. In addition, the background color does not offer enough contrast for the copy."
              correctCopy={
                <img src="https://www2.arccorp.com/globalassets/styleguide/color-guidance2.png" />
              }
              correctInfo="Correct use of brand colors. Primary colors should be used as main color in collateral. This background color also offers sufficient contrast for the copy."
            />
          </div>
        </div>

        <div className="styleguide-doc-section">
          <div className="styleguide-doc-inner">
            <h2>Animated GIF</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              posuere lacus in lacus accumsan, at tincidunt metus efficitur.
              Vivamus fermentum ante a urna vehicula molestie.
            </p> */}
            <div className="row no-gutters">
              <div className="col-md-12">
                <div className="row text-center mt-4">
                  <div className="col-lg-6">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/styleguide/images/arc-teal-small.gif"
                    />
                    <br />
                    <a
                      target="_blank"
                      href="https://www2.arccorp.com/globalassets/styleguide/images/arc-teal-small.gif"
                      className="ctaBtn"
                    >
                      Download
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <img
                      className="img-fluid lozad"
                      src="https://www2.arccorp.com/globalassets/styleguide/images/arc-black-small.gif"
                    />
                    <br />
                    <a
                      target="_blank"
                      href="https://www2.arccorp.com/globalassets/styleguide/images/arc-black-small.gif"
                      className="ctaBtn"
                    >
                      Download
                    </a>
                  </div>
                </div>

                <div className="row text-center mt-4">
                  <div className="col-lg-6">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/styleguide/images/arc-teal-large.gif"
                    />
                    <br />
                    <a
                      target="_blank"
                      href="https://www2.arccorp.com/globalassets/styleguide/images/arc-teal-large.gif"
                      className="ctaBtn"
                    >
                      Download
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/styleguide/images/arc-black-large.gif"
                    />
                    <br />
                    <a
                      target="_blank"
                      href="https://www2.arccorp.com/globalassets/styleguide/images/arc-black-large.gif"
                      className="ctaBtn"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BottomPageNav
          prevLink="our-brand.html"
          prevName="Using Our Brand"
          nextLink="writing-style-guide.html"
          nextName="Writing Style Guide"
        />
      </Layout>
    );
  }
}

export default Visual;

var mountNode = document.getElementById("app");

ReactDOM.render(<Visual />, mountNode);
