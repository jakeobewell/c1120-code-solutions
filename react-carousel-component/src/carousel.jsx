import React from "react";
import ReactDOM from "react-dom";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {position: 0}
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    let newPosition = this.state.position
    if (event.target.id === 'right') {
      newPosition++
    }
    if (event.target.id === 'left') {
      newPosition--
    }
    if (event.target.matches('.far')) {
      newPosition = parseInt(event.target.pos);
    }
    if (newPosition === -1) {
      newPosition = this.props.images.length -1;
    }
    if (newPosition === this.props.images.length) {
      newPosition = 0;
    }
    this.setState({ position: newPosition})
  }

  render() {
    const images = this.props.images;
    const CurrentImage = images.map((image) => {
      if (this.state.position === images.pos) {
        return <image src={image.url}></image>
      }
    })
    const Icons = images.map((image) => {
      if (this.state.position === image.pos) {
        return <i pos={image.pos} className="fas fa-circle" onClick={this.handleClick}></i>
      }
      else {
        return <i pos={image.pos} className="far fa-circle" onClick={this.handleClick}></i>
      }
    });
    return (
      <div className="row">
        <div className="col-one-fourth left">
          <i className="fas fa-angle-left" id="left" onClick={this.handleClick}></i>
        </div>
        <div className="col-one-half">
          <CurrentImage></CurrentImage>
        </div>
        <div className="container">
          <Icons></Icons>
        </div>
        <div className="col-one-fourth right">
          <i className="fas fa-angle-right" id="right" onClick={this.handleClick}></i>
        </div>
      </div>
    );
  }
}
