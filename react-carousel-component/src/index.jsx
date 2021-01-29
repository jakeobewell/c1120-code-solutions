import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./carousel";

const images = [
  { pos: 0, url: "../images/001.png" },
  { pos: 1, url: "../images/004.png" },
  { pos: 2, url: "../images/007.png" },
  { pos: 3, url: "../images/025.png" },
  { pos: 4, url: "../images/039.png" }
]



ReactDOM.render(
  <Carousel images={images} />, document.getElementById('root')
);
