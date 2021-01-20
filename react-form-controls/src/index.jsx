import React from "react";
import ReactDOM from "react-dom";

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state:', this.state);
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label for="email">Email: </label>
      <input id="email" type="text" value={this.state.email} onChange={this.handleChange}></input>
      <button type="submit" value="submit">Sign Up</button>
    </form>
    );
  }
}

ReactDOM.render(<NewsletterForm />, document.getElementById('root'));
