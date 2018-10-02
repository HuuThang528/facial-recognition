import * as React from "react";
import * as ReactDOM from "react-dom";
import Dashboard from './Dashboard'

const App = () => (<Dashboard></Dashboard>
  );
  

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;