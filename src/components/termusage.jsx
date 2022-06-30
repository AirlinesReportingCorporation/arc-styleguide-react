import React, { Component } from "react";

class TermsUsage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={
          (this.props.className ? this.props.className : "term-usage-block") +
          (this.props.images ? " term-usage-block-img" : "") || (this.props.className ? this.props.className : "term-usage-writing")
        }
      >
        <div className="row">
          <div className="col-lg-6">
          <h5 className="term-type">Incorrect</h5>
          <div className="incorrect-bar"></div>
          <div className="bottom-area">
              <p className="term-explaination">{this.props.incorrectInfo}</p>
            </div>
            <div className="incorrect">
              <div className="term-usage-copy">{this.props.incorrectCopy}</div>
            </div>
          </div>
          <div className="col-lg-6">
          <h5 className="term-type">Correct</h5>
          <div className="correct-bar"></div>
          <div className="bottom-area">
              <p className="term-explaination">{this.props.correctInfo}</p>
            </div>
            <div className="correct">
              <div className="term-usage-copy">{this.props.correctCopy}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TermsUsage;
