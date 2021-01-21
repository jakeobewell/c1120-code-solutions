import React from "react";
import ReactDOM from "react-dom";

export default class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }


  render() {
    if (this.state.password === '') {
      return (
        <form>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={this.state.password} onChange={this.handleChange}></input>
            <i className="fa fa-times ex"></i>
            <p>A password is required.</p>
        </form>
      );
    }
    if (this.state.password.length < 8) {
      return (
        <form>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={this.state.password} onChange={this.handleChange}></input>
          <i className="fa fa-times ex"></i>
          <p>Your password is too short.</p>
        </form>
      );
    }
    if (this.state.password.length >= 8) {
      return (
        <form>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={this.state.password} onChange={this.handleChange}></input>
          <i className="fa fa-check check"></i>
        </form>
      );
    }
  }
}
