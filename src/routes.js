import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Aboutme from "./components/about/Aboutme";
import Knowledge from "./components/knowledge/Knowledge";
import Experience from "./components/experience/Experience";
import News from "./components/news/News";
import RouteNoMatch from "./RouteNoMatch";

import Menu from "./components/common/Menu";

const history = createBrowserHistory();

const AppRouter = () =>
  <Router history={history}>
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={Aboutme} />
        <Route path="/news" component={News} />
        <Route path="/knowledge" component={Knowledge} />
        <Route path="/career" component={Experience} />
        <Route component={RouteNoMatch} />
      </Switch>
    </div>
  </Router>;

export default AppRouter;
