import React, { Component } from "react";

class ColorBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.col ? this.props.col : ""}>
        <div
          className={"ColorBox " + (this.props.size ? this.props.size : "")}
          style={{
            backgroundColor: this.props.hex,
            fontFamily: "Source Sans Pro Semibold",
            color: "white",
          }}
        >
          <div className={"ColorBox-name "}>{this.props.name}</div>
          <div className="ColorBox-props">
            <div className="ColorBox-prop">
              <strong>PMS:</strong> {this.props.pms}
            </div>
            <div className="ColorBox-prop">
              <strong>CMYK:</strong> {this.props.cmyk}
            </div>
            <div className="ColorBox-prop">
              <strong>RGB:</strong> {this.props.rgb}
            </div>
            <div className="ColorBox-prop">
              <strong>HEX:</strong> {this.props.hex}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorBox;
