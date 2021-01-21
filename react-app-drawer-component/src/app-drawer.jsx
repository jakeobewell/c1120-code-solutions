import React from "react";
import ReactDOM from "react-dom";

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { open: false }
  }
  handleClick() {
    if (this.state.open === false) {
      this.setState({ open: true })
    }
    if (this.state.open === true) {
      this.setState({ open: false })
    }
  }

  render() {
    if (this.state.open === false) {
      return (
        <i className="fa fa-bars menu-icon" onClick={this.handleClick}></i>
      );
    }
    if (this.state.open === true) {
      return (
        <div className="page">
          <div className="menu-container">
            <h1>Menu</h1>
            <a href="#" onClick={this.handleClick}>About</a>
            <a href="#" onClick={this.handleClick}>Get Started</a>
            <a href="#" onClick={this.handleClick}>Sign In</a>
          </div>
          <div className="shade" onClick={this.handleClick}></div>
        </div>
      );
    }
  }
}
