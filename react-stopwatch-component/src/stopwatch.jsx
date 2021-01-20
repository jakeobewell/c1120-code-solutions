import React from "react";
import ReactDOM from "react-dom";

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.state = {
      play: false,
      time: 0 }
  };
  tick() {
    this.setState({ time: this.state.time + 1 })
  }

  timerOn() {
    this.timer = setInterval(this.tick.bind(this), 1000);
  }

  timerOff() {
    clearInterval(this.timer);
  }

  handleClick() {
    if (this.state.play === false) {
    this.setState({ play: true });
    this.timerOn();
    }
    if (this.state.play === true) {
      this.setState({ play: false });
      this.timerOff();
    }
  }

  handleClickTwo() {
    if (this.state.play === false) {
      this.setState({ time: 0})
    }
  }

  render() {
    if (this.state.play === false) {
      return (
        < div className="center">
          <div className="circle" onClick={this.handleClickTwo}>
            <p>{this.state.time}</p>
          </div>
          <span><i className="fa fa-play" onClick={this.handleClick}></i></span>
        </div>
      );
    }
    if (this.state.play === true) {
      return (
        <div className="center">
          <div className="circle" onClick={this.handleClickTwo}>
            <p>{this.state.time}</p>
          </div>
          <span><i className="fa fa-pause" onClick={this.handleClick}></i></span>
        </div>
      );
    }
  }
}
