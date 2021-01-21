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
    let message = null;
    let icon = 'fa fa-times ex';
    const pLength = this.state.password.length;
    if (this.state.password === '') {
      message = 'A password is required.';
    }
    if (pLength > 0 && pLength < 8) {
      message = 'Your password is too short.'
    }
    if (pLength >= 8) {
      message = '';
      icon = 'fa fa-check check';
    }
    return (
      <form>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={this.state.password} onChange={this.handleChange}></input>
        <i className={icon}></i>
        <p>{message}</p>
      </form>
    );
  }
}
