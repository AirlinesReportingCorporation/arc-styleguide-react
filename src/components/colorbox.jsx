import React, { Component } from "react";

class ColorBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={"ColorBox " + (this.props.col ? this.props.col : "")}
        style={{
          backgroundColor: this.props.hex,
          fontFamily: "Source Sans Pro Semibold",
          color: "white",
        }}
      >
        <div>{this.props.name}</div>
        <div>
          <div>PMS:{this.props.pms}</div>
          <div>CMYK:{this.props.cmyk}</div>
          <div>RGB:{this.props.rgb}</div>
          <div>HEX:{this.props.hex}</div>
        </div>
      </div>
    );
  }
}

export default ColorBox;
