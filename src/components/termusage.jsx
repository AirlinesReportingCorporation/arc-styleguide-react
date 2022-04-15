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
            <div className="bottom-area">
            <h5 className="term-type">Incorrect</h5>
            <p className="term-explaination">{this.props.incorrectInfo}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="correct">
              <div className="term-usage-copy">{this.props.correctCopy}</div>
            </div>
            <div className="correct-bar"></div>
            <div className="bottom-area">
            <h5 className="term-type">Correct</h5>
            <p className="term-explaination">{this.props.correctInfo}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TermsUsage;
