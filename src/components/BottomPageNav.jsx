import React, { Component } from "react";

class BottomPageNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="styleguide-bottom-page-nav">
        <div className="row no-gutters">
          {this.props.prevLink ? (
            <div className="col-lg-6">
              <a
                href={this.props.prevLink}
                className="styleguide-nav-bottom styleguide-nav-prev"
              >
                <div className="styleguide-nav-bottom-inner">
                  Previous:<br/>
                  {this.props.prevName}
                </div>
              </a>
            </div>
          ) : (
            <div className="col-lg-6"></div>
          )}
          {this.props.nextLink ? (
            <div className="col-lg-6">
              <a
                href={this.props.nextLink}
                className="styleguide-nav-bottom  styleguide-nav-next"
              >
                <div className="styleguide-nav-bottom-inner">
                  Next:<br/>
                  {this.props.nextName}
                </div>
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default BottomPageNav;
