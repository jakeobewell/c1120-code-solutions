import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const div = React.createElement(
  'h1',
  null,
  'Hello, React!'
)

ReactDOM.render(div, root)
