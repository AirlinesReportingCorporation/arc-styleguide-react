import React, { Component } from "react";
import ColorBox from "./ColorBox";

class ColorAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 0,
    };
  }

  colorHover(id) {
    
    this.setState({ activeId: id });
  }

  colorOut(id) {
    this.setState({ activeId: 0 });
  }

  getActiveClass(id) {
    console.log(this.state.activeId);
    // if nothing hovered col-lg-4
    // else if currentitem is hovered over col-lg-6
    // else if currentitem is not active col-lg-3

    if (this.state.activeId == id) {
      return "col-lg-6";
    } else if (this.state.activeId != 0) {
      return "col-lg-3";
    }

    return "col-lg-4";
  }

  render() {
    return (
      <div className="row">
        <div
          className={this.getActiveClass(1)}
          onMouseOver={() => this.colorHover(1)}
          onMouseOut={() => this.colorOut(1)}
        >
          <ColorBox name="" hex="#000000" />
        </div>
        <div
          className={this.getActiveClass(2)}
          onMouseOver={() => this.colorHover(2)}
          onMouseOut={() => this.colorOut(2)}
        >
          <ColorBox name="" hex="#000000" />
        </div>
        <div
          className={this.getActiveClass(3)}
          onMouseOver={() => this.colorHover(3)}
          onMouseOut={() => this.colorOut(3)}
        >
          <ColorBox name="" hex="#000000" />
        </div>
      </div>
    );
  }
}

export default ColorAccordion;
