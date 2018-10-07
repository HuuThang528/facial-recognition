import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./assets/css/material-dashboard-react.css?v=1.5.0";

import indexRoutes from "./routes/index";
import StudentList from "./views/Students/StudentList";
import NewStudent from "./views/Students/NewStudent";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
      <Route path="students" component={StudentList}>
        <Route path="new" component={NewStudent} />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("app")
);
