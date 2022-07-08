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
    //console.log(this.state.activeId);
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
      <div
        className={
          "colorAccordion " + (this.state.activeId != 0 ? "hover" : "")
        }
      >
        <div className="row">
          <div
            className={"transitionRow " + this.getActiveClass(1)}
            onMouseOver={() => this.colorHover(1)}
            onMouseOut={() => this.colorOut(1)}
          >
            <ColorBox
              name={this.props.colors ? this.props.colors[0].name : ""}
              hex={this.props.colors ? this.props.colors[0].hex : ""}
              pms={this.props.colors ? this.props.colors[0].pms : ""}
              cmyk={this.props.colors ? this.props.colors[0].cmyk : ""}
              rgb={this.props.colors ? this.props.colors[0].rgb : ""}
              size="sm"
            />
          </div>
          <div
            className={"transitionRow " + this.getActiveClass(2)}
            onMouseOver={() => this.colorHover(2)}
            onMouseOut={() => this.colorOut(2)}
          >
            <ColorBox
              name={this.props.colors ? this.props.colors[1].name : ""}
              hex={this.props.colors ? this.props.colors[1].hex : ""}
              pms={this.props.colors ? this.props.colors[1].pms : ""}
              cmyk={this.props.colors ? this.props.colors[1].cmyk : ""}
              rgb={this.props.colors ? this.props.colors[1].rgb : ""}
              size="sm"
            />
          </div>
          <div
            className={"transitionRow " + this.getActiveClass(3)}
            onMouseOver={() => this.colorHover(3)}
            onMouseOut={() => this.colorOut(3)}
          >
            <ColorBox
              name={this.props.colors ? this.props.colors[2].name : ""}
              hex={this.props.colors ? this.props.colors[2].hex : ""}
              pms={this.props.colors ? this.props.colors[2].pms : ""}
              cmyk={this.props.colors ? this.props.colors[2].cmyk : ""}
              rgb={this.props.colors ? this.props.colors[2].rgb : ""}
              size="sm"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ColorAccordion;
