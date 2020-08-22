import React from "react";
import HomePage from "./Components/HomePage";
import NotFoundPage from "./Components/ErrorPages/Error404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route
          path='*'
          component={() => {
            window.location.href = "/";
          }}
        />
        {/* <Route path='*' component={NotFoundPage} /> */}
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;
