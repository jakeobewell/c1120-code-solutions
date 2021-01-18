import React from "react";
import ReactDom from "react-dom";

function CustomButton() {
  return <button>Click Me!</button>
}

const button = <CustomButton />;

ReactDom.render(button, document.getElementById('root'));
