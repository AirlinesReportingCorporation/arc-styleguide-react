import React, { Component } from "react";

class TermsUsage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className ? this.props.className : "default-class"}>
        <div>{this.props.incorrectCopy}</div>
        <div>{this.props.correctCopy}</div>
      </div>
    );
  }
}

export default TermsUsage;
