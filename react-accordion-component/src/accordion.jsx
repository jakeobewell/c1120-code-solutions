import React from "react";
import ReactDOM from "react-dom";

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topicId: null }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ topicId: event.target.id})
  }

  render() {
    const topics = this.props.topics;
    const topicList = topics.map((topic) => {
      if (this.state.topicId === topic.id) {
        return (
        <div className="container">
          <h3 id="nope" onClick={this.handleClick}>{topic.name}</h3>
          <p>{topic.content}</p>
        </div>
        );
      }
      else {
        return (
          <div className="container">
            <h3 id={topic.id} onClick={this.handleClick}>{topic.name}</h3>
            <p className="hidden">{topic.content}</p>
          </div>
        );
      }
    });
    return topicList;
  }
}
