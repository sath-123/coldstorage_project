import React from "react";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Detailed from "./components/Detailed";
import Manage from "./components/Manage";
import Navbarmenu from "./components/cs_comp/Navbar_menu";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
Amplify.configure(awsconfig);

function App() {
  const [selectedMode, setSelectedMode] = useState("");
  return (
    <div>
      <Router basename="/">
        <Navbarmenu setSelectedMode={setSelectedMode} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Home selectedMode={selectedMode} setSelectedMode={setSelectedMode}/>}
          />
          <Route
            exact
            path="/Detailed"
            component={() => <Detailed selectedMode={selectedMode} setSelectedMode={setSelectedMode}/>}
          />
          <Route exact path="/Manage" component={Manage} />
        </Switch>
      </Router>
    </div>
  );
}

export default withAuthenticator(App);

//temperate-tech-2021