import * as React from "react";
import * as ReactDom from "react-dom";
import * as ReactAce from "react-ace";
var onChange = function(obj: any) {
  console.log(obj + "foo");
};
// render a first
ReactDom.render(
  <div className="App">
    <ReactAce.default
      mode="java"
      theme="github"
      name="blah1"
      height="6em"
      onChange={onChange}
    />
  </div>,
  document.getElementById("foo")
);
