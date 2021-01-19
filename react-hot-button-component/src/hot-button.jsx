import React from "react";
import ReactDOM from "react-dom";

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clicked: 0 }
  }
  handleClick() {
    this.setState({ clicked: (clicked + 1) })
  }

  render() {
    if (this.state.click < 3) {
      return <button className="stage-one" onClick={this.handleClick}>Hot Button</button>
    }
    if (this.state.click < 6) {
      return <button className="stage-two" onClick={this.handleClick}>Hot Button</button>
    }
  }
}
