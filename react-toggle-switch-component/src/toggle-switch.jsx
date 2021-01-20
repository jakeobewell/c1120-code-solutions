import React from "react";
import ReactDOM from "react-dom";

export default class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clicked: false }
  }
  handleClick() {
    if (this.state.clicked === false) {
    this.setState({ clicked: true })
    }
    if (this.state.clicked === true) {
      this.setState( {clicked: false })
    }
  }

  render() {
    if (this.state.clicked === false) {
      return (
        <div className="flex">
          <div className="switch-off" onClick={this.handleClick}>
            <div className="switch-button-off"></div>
          </div>
          <span>OFF</span>
        </div>
      );
    }
    if (this.state.clicked === true) {
      return (
        <div className="flex">
          <div className="switch-on" onClick={this.handleClick}>
            <div className="switch-button-on"></div>
          </div>
          <span>ON</span>
        </div>
      );
    }
  }
}
