import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
  }

  getComponent() {
    let component;
    switch (this.state.currentComponent) {
      case "compA":
        component = <CompA />;
        break;
      case "compB":
        component = <CompB />;
        break;
      case "compC":
        component = <CompC />;
        break;
      case "compD":
        component = <CompD />;
        break;
    }
    return component;
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <div class="flex_container">
          <div className="top_nav">
            <div class="flex_side_sticky">
              <div className="navbar">
                <div className="nav-menu">
                  <div className="nav-menu-items style-main-item">
                    Our Brand
                  </div>
                  <div className="nav-menu-items style-main-item">
                    Using Our Brand
                  </div>
                  <div className="nav-menu-items style-sub-item">
                    Brand Language
                  </div>
                  <div className="nav-menu-items style-sub-item">
                    Brand Voice
                  </div>
                  <div className="nav-menu-items style-main-item">
                    Visual Identity
                  </div>
                  <div className="nav-menu-items style-sub-item">Logo</div>
                  <div className="nav-menu-items style-sub-item">
                    Typography
                  </div>
                  <div className="nav-menu-items style-sub-item">
                    Color Palette
                  </div>
                  <div className="nav-menu-items style-main-item">
                    Writing Style Guide & Best Practices
                  </div>
                  <div className="nav-menu-items style-sub-item">
                    Frequently Used Terms
                  </div>
                  <div className="nav-menu-items style-sub-item">
                    Formatting Dates, Times, & Numbers
                  </div>
                  <div className="nav-menu-items style-sub-item">
                    Grammar & Punctuating
                  </div>
                  <div className="nav-menu-items style-main-item">
                    Web Style Guide
                  </div>
                  <div className="nav-menu-items style-sub-item">
                    Typography
                  </div>
                  <div className="nav-menu-items style-sub-item">
                    Components
                  </div>
                  <div className="nav-menu-items style-sub-item">
                    Best Practices
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex_right_content">
          {this.getComponent()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
