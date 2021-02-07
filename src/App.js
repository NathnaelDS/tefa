import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Fire from "./pages/issue/fire";
import Power from "./pages/issue/power";
import Water from "./pages/issue/water";
import Ambulance from "./pages/issue/ambulance";
import Police from "./pages/issue/police";
import SignIn from "./pages/signIn";
// import SignIn from "./pages/signIn[Obsolete]";
import SignUpResponder from "./pages/signUpResponder";
import SignInResponder from "./pages/signInResponder";
import HomeResponder from "./pages/homer";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import SigningRoute from "./components/SigningRoute";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Example from "./pages/example";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="text-gray-900">
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

            {/* <SigningRoute exact path="/signup" component={SignUp} /> */}
            <SigningRoute exact path="/signin" component={SignIn} />

            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/example" component={Example} />
            <PrivateRoute exact path="/reports" component={Reports} />
            <PrivateRoute exact path="/settings" component={Settings} />
            <PrivateRoute path="/power" component={Power} />
            <PrivateRoute path="/fire" component={Fire} />
            <PrivateRoute path="/ambulance" component={Ambulance} />
            <PrivateRoute path="/water" component={Water} />
            <PrivateRoute path="/police" component={Police} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
