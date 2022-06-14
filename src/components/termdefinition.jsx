import React, { Component } from "react";

class TermDef extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="term-def">
        <div className="row">
          <div className="col-3">
            <h3 className="term-item" style={{ width: this.props.width }}>
              {this.props.term}
            </h3>
          </div>
          <div className="col-9 term-definition">{this.props.definition}</div>
        </div>
      </div>
    );
  }
}

export default TermDef;
