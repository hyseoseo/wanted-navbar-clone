import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import EventsContainer from "./containers/EventsContainer";
import SalaryContainer from "./containers/SalaryContainer";
import CvContainer from "./containers/CvContainer";
import MatchupContainer from "./containers/MatchupContainer";
import ExpertsContainer from "./containers/ExpertsContainer";
import AiscoreContainer from "./containers/AiscoreContainer";
import DashboardContainer from "./containers/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainContainer} />
        <Route path="/events" exact component={EventsContainer} />
        <Route path="/salary" exact component={SalaryContainer} />
        <Route path="/cv" exact component={CvContainer} />
        <Route path="/matchup" exact component={MatchupContainer} />
        <Route path="/experts" exact component={ExpertsContainer} />
        <Route path="/aiscore" exact component={AiscoreContainer} />
        <Route path="/dashboard" exact component={DashboardContainer} />
      </Switch>
    </Router>
  );
}

export default App;
