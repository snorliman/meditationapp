import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from "./layouts/HomePage";
import Login from "./layouts/Login";
import Register from "./layouts/Register";
import MeditationApp from "./layouts/MeditationApp";


function App() {
  return (
    <Switch>  
      <Route path="/">
        <HomePage/>
      </Route>
      <Route path="/zaloguj">
        <Login/>
      </Route>
      <Route path="/rejestracja">
        <Register/>
      </Route>
      <Route path="/aplikacja">
        <MeditationApp/>
      </Route>
    </Switch>
    
  );
}

export default App;
