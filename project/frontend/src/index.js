import App from './App'
import * as React from "react";
import * as ReactDOM from "react-dom";
const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;