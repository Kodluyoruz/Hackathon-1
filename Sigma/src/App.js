import React from "react";
import "./styles.css";
import { Button, Container } from "reactstrap";
import Landing from "./components/Landing";
import SSS from "./components/SSS";
import Team from "./components/Team";
import Hackathon from "./components/Hackathon";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
    return (
        <div className="App Contfull">
      <Container>
        {/* <Router>
          <Switch>
            <Route path="/">
              <Landing />
            </Route>
            <Route path="/users">
              <SSS />
            </Route>
            <Route path="/sss">
              <SSS />
            </Route>
          </Switch>
        </Router> */}
        <Router>
          <Route path="/" exact component={Landing} />
          <Route path="/team" exact component={Team} />
          <Route path="/sss" component={SSS} />
          <Route path="/hackathon" component={Hackathon} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/sss" component={SSS} /> */}
        </Router>
      </Container>
    </div>
    );
}