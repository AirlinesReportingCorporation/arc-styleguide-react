import React, { Component } from "react";


class ButtonBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className ? this.props.className : "button-box"}>
        <button className="ctaBtn">{this.props.button}</button>
      </div>
    );
  }
}

export default ButtonBox;