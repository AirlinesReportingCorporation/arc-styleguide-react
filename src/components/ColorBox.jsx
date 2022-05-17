import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Modal from 'react-bootstrap/Modal';


class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }

  handleShow() {
    var e = this;
    if (this.state.modalShow == false) {
      this.setState({ modalShow: true });
    } else {
      this.setState({ modalShow: false });
    }
  }

  render() {
    return (
      <div className={this.props.col ? this.props.col : ""}>
        <CopyToClipboard text={this.props.hex}>
          <div
            onClick={() => this.handleShow()}
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
            <Modal show={this.state.modalShow}>
            <Modal.Header>
              <p
                style={{
                  border: "2px solid" + this.props.hex,
                  padding: "10px",
                  borderRadius: "5px",
                  fontSize: "2rem",
                  display: 'flex',
                }}
              >
                Copied! {this.props.name}: {this.props.hex}
              </p>
            </Modal.Header>
          </Modal>
          </div>
         
        </CopyToClipboard>
      </div>
    );
  }
}

export default ColorBox;
