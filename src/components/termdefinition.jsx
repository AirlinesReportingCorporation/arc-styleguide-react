import React, { Component } from "react";

class TermDef extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="row term-def">
        <div className="col-3">
          <h3 className="term-item">{this.props.term}</h3>
        </div>
        <div className="col-9 term-definition">
           {this.props.definition}
        </div>
      </div>
    );
  }
}

export default TermDef;
