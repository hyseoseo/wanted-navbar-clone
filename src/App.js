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
        <Route path="/category" exact component={CategoryContainer} />
        <Route path="/aiscore" exact component={AiscoreContainer} />
        <Route path="/dashboard" exact component={DashboardContainer} />
      </Switch>
    </Router>
  );
}

export default App;
