import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Fire from "./pages/issue/fire";
import Power from "./pages/issue/power";
import Water from "./pages/issue/water";
import Ambulance from "./pages/issue/ambulance";
import Police from "./pages/issue/police";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import SignUpResponder from "./pages/signUpResponder";
import SignInResponder from "./pages/signInResponder";
import HomeResponder from "./pages/homer";

function App() {
  return (
    <Router>
      <div className="text-gray-900">
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/power">Power</Link>
          </li>
          <li>
            <Link to="/fire">Fire</Link>
          </li>
          <li>
            <Link to="/ambulance">Ambulance</Link>
          </li>
          <li>
            <Link to="/water">Water</Link>
          </li>
          <li>
            <Link to="/police">Police</Link>
          </li>
        </ul> */}

        <hr />

        <Switch>
          <Route exact path="/signupr">
            <SignUpResponder />
          </Route>
          <Route exact path="/signinr">
            <SignInResponder />
          </Route>
          <Route exact path="/homer">
            <HomeResponder />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/power">
            <Power />
          </Route>
          <Route path="/fire">
            <Fire />
          </Route>
          <Route path="/ambulance">
            <Ambulance />
          </Route>
          <Route path="/water">
            <Water />
          </Route>
          <Route path="/police">
            <Police />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
