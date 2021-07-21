import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainContainer from "./containers/MainContainer";
import EventsContainer from "./containers/EventsContainer";
import SalaryContainer from "./containers/SalaryContainer";
import CvContainer from "./containers/CvContainer";
import MatchupContainer from "./containers/MatchupContainer";
import CategoryContainer from "./containers/CategoryContainer";
import AiscoreContainer from "./containers/AiscoreContainer";
import DashboardContainer from "./containers/Dashboard";
import Header from "./components/Header";
import SearchContainer from "./containers/SearchContainer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={MainContainer} />
        <Route path="/events" exact component={EventsContainer} />
        <Route path="/salary" exact component={SalaryContainer} />
        <Route path="/cv" exact component={CvContainer} />
        <Route path="/matchup" exact component={MatchupContainer} />
        <Route
          path="/category/:bigid/:smallid"
          exact
          component={CategoryContainer}
        />
        <Route path="/category/:bigid" exact component={CategoryContainer} />
        <Route path="/category" exact component={CategoryContainer} />
        <Route path="/aiscore" exact component={AiscoreContainer} />
        <Route path="/dashboard" exact component={DashboardContainer} />
        <Route path="/search" component={SearchContainer} />
      </Switch>
    </Router>
  );
}

export default App;
