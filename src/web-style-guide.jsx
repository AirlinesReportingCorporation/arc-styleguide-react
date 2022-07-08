import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout";
import TermsUsage from "./components/termusage";
import BottomPageNav from "./components/BottomPageNav";
import TermDef from "./components/termdefinition";

class Web extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout active="style-guide">
        <div className="styleguide-doc-section styleguide-doc-header border-bottom">
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
                <h2 id="typography">Typography</h2>
                <p>
                  It's important to use typography and write semantic HTML in
                  order to present information in a way that is easily
                  consumable. There are many benefits to writing semantic HTML
                  including improved accessibility and search engine
                  optimization.
                </p>
                <TermDef
                  term="Semantic Tags"
                  width="190px"
                  definition={
                    <>
                      <p>
                        Semantic tags are often used in web design to structure
                        content. These tags also provide information to browsers
                        and other web-based programs about the content of a
                        page. Semantic HTML tags help search engine crawlers
                        understand the content of a page and rank it in search
                        results. This is important because pages that rank
                        higher in search results will have more traffic than
                        pages that rank lower.
                      </p>
                      <p>
                        When using semantic HTML tags, you make your page more
                        accessible to devices that support this standard. It's
                        important to note that the most productive use of
                        semantic HTML tags is in a web design environment where
                        designers have control over the layout and content of
                        pages.
                      </p>
                    </>
                  }
                />
                <TermDef
                  term="Legibility"
                  width="190px"
                  definition={
                    <>
                      <p>
                        Semantic tags are often used in web design to structure
                        content. These tags also provide information to browsers
                        and other web-based programs about the content of a
                        page. Semantic HTML tags help search engine crawlers
                        understand the content of a page and rank it in search
                        results. This is important because pages that rank
                        higher in search results will have more traffic than
                        pages that rank lower.
                      </p>
                      <p>
                        When using semantic HTML tags, you make your page more
                        accessible to devices that support this standard. It's
                        important to note that the most productive use of
                        semantic HTML tags is in a web design environment where
                        designers have control over the layout and content of
                        pages.
                      </p>
                    </>
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
                <h2 id="accessibility">Accessibility</h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-6"
              >
                <div className="accessibility-div" style={{ backgroundColor: "#fff", textAlign: "center" }}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="accessibility-title">
                        Background Clear Skies HEX #FFFFFF
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6" style={{ color: "#2a2b2c" }}>
                      <div className="accessibility-text-top">
                        <div>COPY</div>
                        <div>Tarmac</div>
                        <div>HEX #2A2B2C</div>
                      </div>
                      <div className="accessibility-text-bottom">
                        <div>14.18:1 WCAG: AAAAA PASS WCAG: AAAAA PASS</div>
                      </div>
                    </div>
                    <div className="col-lg-6 vl" style={{ color: "#aaaaaa" }}>
                      <div className="accessibility-text-top">
                        <div>COPY</div>
                        <div>Landing Gear Grey</div>
                        <div>HEX #888888</div>
                      </div>
                      <div className="accessibility-text-bottom">
                        <div>14.18:1 WCAG: AAAAA PASS WCAG: AAAAA PASS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6"
                style={{ backgroundColor: "#2a2b2c", textAlign: "center" }}
              >
                <div className="row">
                  <div className="col-lg-12" style={{ color: "#ffffff" }}>
                    <div className="accessibility-title">
                      Background Tarmac Hex #2A2B2C
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6" style={{ color: "#ffffff" }}>
                    <div className="accessibility-text-top">
                      <div>COPY</div>
                      <div>Clear Skies</div>
                      <div>HEX #FFFFFF</div>
                    </div>
                    <div className="accessibility-text-bottom">
                      <div>6.1:1 WCAG: AAAAA PASS WCAG: AAAAA PASS 14pt +</div>
                    </div>
                  </div>
                  <div className="col-lg-6 vl" style={{ color: "#aaaaaa" }}>
                    <div className="accessibility-text-top">
                      <div>Copy</div>
                      <div>Clear Skies</div>
                      <div>HEX #AAAAAA</div>
                    </div>
                    <div className="accessibility-text-bottom">
                      <div>14.18:1 WCAG: AAAAA PASS WCAG: AAAAA PASS</div>
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
                <h2 id="components">Web Components</h2>
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
                <h2 id="bestPractices">Best Practices</h2>
                <p>
                  Best practices are the foundation of software development.
                  They provide many benefits for the development process and
                  beyond. These include things like choosing the right
                  programming language and framework, being mindful of user
                  experience and performance, following best coding practices
                  and more.
                </p>
                <TermDef
                  term="Modular Code"
                  width="190px"
                  definition={
                    <p>
                      Modular code is a technique that helps developers create
                      software more quickly and with less errors. Basically, the
                      code is broken down into small chunks which can be reused
                      in other projects, making it easier to create a new
                      project without having to start from scratch.
                    </p>
                  }
                />
                <TermDef
                  term="Framework Agnostic"
                  width="190px"
                  definition={
                    <p>
                      Frameworks are a great way of getting started with coding.
                      They will allow you to put together an app in as little
                      time as possible. One of the downsides of framework
                      specific code is that it can get convoluted easily. This
                      is when developers find that writing framework agnostic
                      code works best and fixes a lot of issues with efficiency.
                      Writing reusable code that can be transferred to different
                      frameworks is ideal, especially for utility functions.
                    </p>
                  }
                />
                <TermDef
                  term="Version Control"
                  width="190px"
                  definition={
                    <p>
                      When developing an application, it is often important to
                      be able to work without fear of damaging your project.
                      Version control can help by letting you make rapid changes
                      without losing your work. You always have the original
                      version of the code and you can go back if you don't like
                      the changes that you've made.
                    </p>
                  }
                />
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
