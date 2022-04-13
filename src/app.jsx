import React, { Component } from "react";

import Landing from "./app-page1";
import Page from "./app-page2";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentComponent : '',
    }
    
  }

  getComponent(){
    let component;
    switch (this.state.currentComponent){
        case 'Landing' :
            component = <Landing/>;
            break;
        case 'Page' :
            component = <Page/>;
            break;
        case 'compC' :
            component = <CompC/>;
            break;
        case 'compD' :
            component = <CompD/>;
            break;
    }
    return component;
}


  render() {
    return (
      <div style={{ width: "100%" }}>
        <div className="top_nav">
            <div className="icon-arc-logo"></div>
            <div className="styles-top-menu">
              <ul onClick={this.setState({currentComponent: 'Landing'})}>Brand Overview</ul>
              <ul>Style Guide</ul>
              <ul>Media Kit</ul>
            </div>
          </div>
        <div className="flex_container">
          <div className="flex_side_sticky">
             <div className="navbar">
               <div className="nav-menu">
                 <ul className="nav-menu-items style-main-item">
                   Our Brand
                 </ul>
                 <ul onClick={this.setState({currentComponent: 'Page'})} className="nav-menu-items style-main-item">
                   Using Our Brand
                 </ul>
                 <ul className="nav-menu-items style-sub-item">
                   Brand Language
                 </ul>
                 <ul className="nav-menu-items style-sub-item">
                   Brand Voice
                 </ul>
                 <ul className="nav-menu-items style-main-item">
                  Visual Identity
                 </ul>
                 <ul className="nav-menu-items style-sub-item">
                   Logo
                 </ul>
                 <ul className="nav-menu-items style-sub-item">
                   Typography
                 </ul>
                 <ul className="nav-menu-items style-sub-item">
                   Color Palette
                 </ul>
                 <ul className="nav-menu-items style-main-item">
                   Writing Style Guide & Best Practices
                 </ul>
                 <ul className="nav-menu-items style-sub-item">
                   Frequently Used Terms
                 </ul>
                 <ul className="nav-menu-items style-sub-item">
                   Formatting Dates, Times, & Numbers
                 </ul>
                 <ul className="nav-menu-items style-sub-item">
                   Grammar & Punctuating
                 </ul>
                 <ul className="nav-menu-items style-main-item">
                   Web Style Guide
                 </ul>
                 <ul className="nav-menu-items style-sub-item">
                   Typography
                 </ul>
                 <ul className="nav-menu-items style-sub-item">
                   Components
                 </ul>
                 <ul className="nav-menu-items style-sub-item">
                   Best Practices
                 </ul>
               </div>
             </div>
          </div>
          <div className="flex_right_content">
          {this.getComponent()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;