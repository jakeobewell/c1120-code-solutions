import React from "react";
import ReactDOM from "react-dom";

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clicked: 0 }
  }
  handleClick() {
    this.setState({ clicked: this.state.clicked + 1 })
  }

  render() {
    if (this.state.clicked < 3) {
      return (
      <div>
        <button onClick={this.handleClick}>Hot Button</button>
        <h3>Click Count {this.state.clicked}</h3>
      </div>
      );
    }
    if (this.state.clicked < 6) {
      return (
      <div>
        <button className="stage-one" onClick={this.handleClick}>Hot Button</button>
        <h3>Click Count {this.state.clicked}</h3>
      </div>
      );
    }
    if (this.state.clicked < 9) {
      return (
        <div>
          <button className="stage-two" onClick={this.handleClick}>Hot Button</button>
          <h3>Click Count {this.state.clicked}</h3>
        </div>
      );
    }
    if (this.state.clicked < 12) {
      return (
        <div>
          <button className="stage-three" onClick={this.handleClick}>Hot Button</button>
          <h3>Click Count {this.state.clicked}</h3>
        </div>
      );
    }
    if (this.state.clicked < 15) {
      return (
        <div>
          <button className="stage-four" onClick={this.handleClick}>Hot Button</button>
          <h3>Click Count {this.state.clicked}</h3>
        </div>
      );
    }
    if (this.state.clicked < 18) {
      return (
        <div>
          <button className="stage-five" onClick={this.handleClick}>Hot Button</button>
          <h3>Click Count {this.state.clicked}</h3>
        </div>
      );
    }
    if (this.state.clicked >= 18) {
      return (
        <div>
          <button className="stage-six" onClick={this.handleClick}>Hot Button</button>
          <h3>Click Count {this.state.clicked}</h3>
        </div>
      );
    }
  }
}
