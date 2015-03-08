/** @jsx React.DOM */

var React = require('react');
var AceEditor  = require('react-ace');

var onChange = function(obj) {
  console.log(obj);
};
// render a first
React.render(
  <AceEditor
    mode="java"
    theme="github"
    name="blah1"
    height="6em"
    onChange={onChange}
    />,
  document.getElementById('foo')
);

