import React, { Component } from "react";

class TermsUsage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={
          this.props.className ? this.props.className : "term-usage-block"
        }
      >
        <div className="row">
          <div className="col-lg-6">
            <div className="incorrect">
              <div className="term-usage-copy">{this.props.incorrectCopy}</div>
            </div>
            <div className="incorrect-bar"></div>
            <p className="incorrect-explaination">{this.props.incorrectInfo}</p>
          </div>
          <div className="col-lg-6">
            <div className="correct">
              <div className="term-usage-copy">{this.props.correctCopy}</div>
            </div>
            <div className="correct-bar"></div>
            <p className="correct-explaination">{this.props.correctInfo}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TermsUsage;
