import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Modal from "react-bootstrap/Modal";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleShow() {
    var e = this;
    if (this.state.modalShow == false) {
      this.setState({ modalShow: true }, () => {
        setTimeout(e.handleClose, 1500);
      });
    } else {
      this.setState({ modalShow: false });
    }
  }

  handleClose() {
    this.setState({ modalShow: false });
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
            <Modal className="ColorBox-modal" show={this.state.modalShow}>
              <Modal.Header style={{ background: this.props.hex }}>
                <p className="ColorBox-modal-copy">Copied to clipboard!</p>
                <br />
                <p className="ColorBox-modal-copy">
                  <strong>{this.props.name}</strong>: {this.props.hex}
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
