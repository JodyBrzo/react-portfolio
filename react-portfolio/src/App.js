import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route exact path={["/"]}>
              <Home />
            </Route>  
            <Route exact path={["/home"]}>
              <Home />
            </Route>  
            <Route exact path={["/projects"]}>
              <Projects />
            </Route>  
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
