import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./accordion";

const languages = [
  { name: 'Hypertext Markup Language',
    content: 'Hypertext Markup Language (HTML) is the standard' +
            ' markup language for creating web pages and applications.' +
          ' With Cascading Style Sheets (CSS) and JavaScript, it forms' +
        ' a triad of cornerstone technoligies for the World Wide Web.',
      id: 'HTML' },
  { name: 'Cascading Style Sheets',
    content: 'Cascading Style Sheets (CSS) is a style sheet language' +
          ' used for describing the presentation of a document written' +
          ' in a markup language like HTML. CSS is a cornerstone technology' +
          ' of the World Wide Web, alongside HTML and JavaScript.',
        id: 'CSS' },
  { name: 'JavaScript',
    content: 'JavaScript, often abbreviated as JS, is a high-level, ' +
            'interpreted programming language that conforms to the ECMAScript' +
            ' specification. JavaScript has curly-bracket syntax, dynamic typing,' +
            ' prototype-based object-orientation, and first-class functions.',
          id: 'JS' }
];

ReactDOM.render(
  <Accordion topics={languages} />, document.getElementById('root')
);
