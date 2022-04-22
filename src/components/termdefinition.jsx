import React, { Component } from "react";

class TermDef extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-3">
          <h3>{this.props.term}</h3>
        </div>
        <div className="col-9">
           {this.props.definition}
        </div>
      </div>
    );
  }
}

export default TermDef;
