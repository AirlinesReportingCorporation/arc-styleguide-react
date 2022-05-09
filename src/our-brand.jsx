import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout";
import TermDef from "./components/termdefinition";

class ARCBrand extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout active="our-brand">
        <div className="styleguide-doc-section border-bottom">
          <div className="styleguide-doc-inner">
            <div className="row">
              <div className="col-12">
                <h1>Using the ARC Brand</h1>
                <p class="styleguide-doc-subtitle">
                  The ARC brand system ensures that we communicate clearly and
                  reliably to our customers. This framework positions ARC as a
                  forward-looking, customer-oriented and results-driven partner.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h2>Introduction</h2>
                <p>
                  ARC’s brand style guide provides a comprehensive view of ARC’s
                  identity, including messaging, graphics, code and writing
                  style. This guide was created for ARC employees, contractors
                  and industry partners to produce compelling, effective
                  experiences for a variety of audiences.
                </p>
                <button href="https://www2.arccorp.com/globalassets/styleguide/arc-flight-map_a-guide-to-working-with-our-brand.pdf" className="ctaBtn">ARC Flight Map</button>
              </div>
            </div>
          </div>
        </div>
        <div className="styleguide-doc-section ">
          <div className="styleguide-doc-inner">
            <div className="row">
              <h3>About ARC</h3>
              <p>
                The ARC brand system ensures that we communicate clearly and
                reliably to our customers. This framework positions ARC as a
                forward-looking, customer-oriented and results-driven partner.
              </p>
            </div>
            <TermDef
              term="ARC"
              definition={
                <div>
                  <p>
                    ARC stands for Airlines Reporting Corporation. The name
                    "ARC" stands alone, unless "Airlines Reporting Corporation"
                    is required for necessary context. In the instances where
                    that extra context is needed, write “Airlines Reporting
                    Corporation (ARC)” on first reference and “ARC” on
                    subsequent references.
                  </p>{" "}
                  <p>
                    The name is pronounced as you would say the word "arc,"
                    rhyming with "spark." We do not spell it out as A-R-C.
                  </p>
                </div>
              }
            />
            <TermDef
              term="Quick Description"
              definition={
                <p>
                  ARC provides innovative distribution, data and financial
                  solutions to the air travel industry. We connect airlines,
                  travel agencies and technology providers to do business
                  together more effectively and create a better experience for
                  travelers.
                </p>
              }
            />
            <TermDef
              term="Elevator Speech"
              definition={
                <p>
                  ARC provides flexible distribution solutions and the world’s
                  most comprehensive air travel data, helping airlines and
                  travel agencies connect, grow and thrive. ARC accelerates
                  business growth for its customers by delivering trusted
                  products and services built on future-proofed technology. By
                  fostering industrywide collaboration, ARC forges connections
                  across the global air travel community to generate innovation
                  and efficiencies that ultimately enhance the traveler
                  experience.
                </p>
              }
            />
            <TermDef
              term="Boiler Plate"
              definition={
                <p>
                  An industry leader in air travel distribution and
                  intelligence, ARC provides channel-agnostic tools and insights
                  to help the global travel community connect, grow and thrive.
                  ARC enables the diverse retailing strategies of its customers
                  by providing flexible settlement solutions, innovative
                  technology and access to the world’s most comprehensive air
                  transaction dataset. In 2018, ARC settled $94.8 billion in
                  transactions between airlines and travel agencies,
                  representing more than 295 million passenger trips. For more
                  information, please visit www.arccorp.com.
                </p>
              }
            />
            <h2 id="language">ARC Brand Language</h2>
            <h3>The Masterbrand Framework</h3>
            <p>
              ARC’s masterbrand-led framework highlights four core components:
              brand essence, brand promise, brand equities and proof points.
            </p>
            <TermDef
              term="Brand Essence"
              definition={
                <div>
                  <p style={{ color: "#189BB0" }}>
                    Forging Connections. Accelerating Growth.
                  </p>
                  <p>
                    The brand essence is the distilled expression of the brand,
                    embodying ARC’s core purpose
                  </p>
                </div>
              }
            />
            <TermDef
              term="Brand Promise"
              definition={
                <div>
                  <p style={{ color: "#189BB0" }}>
                    ARC helps airlines a ARC helps airlines and travel agencies
                    connect, grow and thrive by delivering flexible distribution
                    solutions, innovative technology and access to the world’s
                    most comprehensive air transaction data.
                  </p>
                  <p>
                    The brand promise articulates the key benefits ARC delivers
                    to its customers.
                  </p>
                </div>
              }
            />

            <h3>Brand Equities and Proof Points</h3>
            <p>
              ARC’s masterbrand-led framework highlights four core components:
              brand essence, brand promise, brand equities and proof points.
            </p>
            <TermDef
              term="Industry Connector"
              definition={
                <ul>
                  <li>
                    Strategically generating collaboration and efficiencies and
                    inspiring relationship-building among industry players
                  </li>
                  <li>
                    Enhancing partnerships through an active and influential
                    thought leadership position
                  </li>
                </ul>
              }
            />
            <TermDef
              term="Leader in Distribution"
              definition={
                <ul>
                  <li>
                    Trusted and reliable provider of distribution services,
                    settling nearly $95 billion annually between airlines and
                    travel agencies
                  </li>
                  <li>
                    Proven expertise in facilitating complex processes on a
                    global scale
                  </li>
                </ul>
              }
            />
            <TermDef
              term="Global Source of Airline Data"
              definition={
                <ul>
                  <li>
                    The world’s most comprehensive air transaction data,
                    representing more than 2 billion passenger trips per year
                  </li>
                  <li>
                    Actionable insights into macro-level trends and granular,
                    micro-level details
                  </li>
                </ul>
              }
            />
            <TermDef
              term="Return on Innovation"
              definition={
                <ul>
                  <li>
                    Flexible and customizable technology services and data
                    products engineered to maximize client and industry value
                  </li>
                  <li>
                    Built on future-proofed technology expertise to deliver
                    high-quality, secure and cost-effective solutions tailored
                    to customer needs
                  </li>
                </ul>
              }
            />
            <h3>Mission, Vision & Tagline</h3>
            <p>
              ARC’s masterbrand-led framework highlights four core components:
              brand essence, brand promise, brand equities and proof points.
            </p>
            <TermDef
              term="Vision"
              definition={
                <div>
                  <p className="term-def-large">
                    To strengthen economies and enrich lives through the growth
                    of global air travel.
                  </p>{" "}
                  <p>
                    ARC’s vision statement conveys what we want the company to
                    become over the next five to ten years.
                  </p>{" "}
                </div>
              }
            />
            <TermDef
              term="Tagline"
              definition={
                <div>
                  <p className="term-def-large">
                    Accelerate the growth of global air travel.
                  </p>
                  <p>
                    ARC’s mission statement reflects why ARC’s business exists.
                  </p>
                </div>
              }
            />
            <TermDef
              term="Tagline"
              definition={
                <div>
                  <p className="term-def-large">
                    The Intelligence Behind Air Travel
                  </p>
                  <p>
                    ARC’s tagline is a short, assertive and compelling statement
                    that conveys the essence of the brand. The tagline is not
                    meant to fully describe what ARC does; rather, it is used to
                    inspire.
                  </p>
                </div>
              }
            />
            <h2 id="voice">Brand Voice</h2>
            <p>
              In order to ensure that both internal and external stakeholders
              are certain of who ARC is, it is important to operate with a
              clear, resounding voice. This requires having a consistent tone
              when communicating.
            </p>
            <p>
              The ARC voice is confident, inspiring, intelligent and researched.
              ARC empowers the global air travel community, striving to always
              be transparent, trustworthy and approachable.
            </p>
            <p>
              Because ARC is an objective, trusted voice at the center of the
              industry, our voice walks a fine line between authority and
              approachability. It’s professional, but not overly formal. It’s
              accessible, but not overly casual. We take care to maintain a
              voice that reflects our role as a trusted leader that consults
              closely with customers to meet their needs.
            </p>
            <p>
              ARC connects the global air travel community to solve problems and
              discover new opportunities. ARC inspires its customers to build
              relationships and solutions that move our industry forward.
            </p>
            <TermDef
              term=""
              definition={
                <p
                  style={{
                    color: "#189BB0",
                    fontSize: "36px",
                    fontFamily: "Source Sans Pro Semibold",
                    textAlign: "center",
                  }}
                >
                  The ARC Voice is confident, inspiring, intelligent and
                  researched.
                </p>
              }
            />
            <TermDef
              term="Sage"
              definition={
                <ul>
                  <li>Seeks truth</li>
                  <li>Sees the world objectively</li>
                  <li>
                    Possesses unique information and is willing to share it
                    freely
                  </li>
                  <li>
                    Provides course-correcting solutions based on objective
                    analysis of actions and choices
                  </li>
                  <li>
                    Transparent, trustworthy, willing to be accessible,
                    approachable
                  </li>
                  <li>
                    Listens and observes closely to gain insights and improve
                    relationships
                  </li>
                  <li>Examples: CNN, Oprah, The Wall Street Journal</li>
                </ul>
              }
            />
            <TermDef
              term="Hero"
              definition={
                <ul>
                  <li>Tough and courageous</li>
                  <li>Leads in times of uncertainty</li>
                  <li>Overcomes tremendous obstacles</li>
                  <li>Proactive problem-solver</li>
                  <li>Persists in difficult times</li>
                  <li>Rises to the challenge</li>
                  <li>Examples: Nike, the U.S. Army</li>
                </ul>
              }
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default ARCBrand;

var mountNode = document.getElementById("app");

ReactDOM.render(<ARCBrand />, mountNode);
