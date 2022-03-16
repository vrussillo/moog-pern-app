import React, { Component } from "react";

import "../styles/Favorites.css";

class HeartButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnText: "Like",
      className: "heartOpen",
    };
  }

  btnClick() {
    if (this.state.btnText === "Like") {
      this.setState({
        btnText: "Unlike",
        className: "heartFull",
      });
    } else {
      this.setState({
        btnText: "Like",
        className: "heartOpen",
      });
    }
  }

  render() {
    return (
      <span onClick={this.btnClick.bind(this)} className={this.state.className}>
        {this.state.btnText}
      </span>
    );
  }
}

export default HeartButton;
