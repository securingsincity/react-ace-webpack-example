var React = require('react');
var ReactDom = require('react-dom');
var AceEditor  = require('react-ace').default;

var onChange = function(obj) {
  console.log(obj+ "foo");
};
// render a first
ReactDom.render(
  <div className="App"><AceEditor
    mode="java"
    theme="github"
    name="blah1"
    height="6em"
    onChange={onChange}
    /></div>,
  document.getElementById('foo')
);

