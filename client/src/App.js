import React, { useState } from "react";
import {BrowserRouter as Router, Link, Route,Switch} from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";
import PrivateRoute from "./components/ProtectedRoute";
import "./style.css"


function App() {
    const remToken = () => {
        const rem = JSON.parse(localStorage.removeItem('token'))

        return rem
    }
  return (
    <Router>
      <div className="App">
          <ul className="links">
              <li>
              <Link to="/">Login</Link>
              </li>
              <li>
                  <Link to="/protected">Buuble-page</Link>
              </li>
              <li>
                  <button  className="button_log_out" onClick={remToken}>Log Out</button>
                  {/*  <Link to="/" onClick={remToken}>Log Out</Link>*/}
              </li>
          </ul>
        <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path = "/protected" component = {BubblePage}/>
            <Route component = {Login}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
