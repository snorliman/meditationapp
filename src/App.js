import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./layouts/HomePage";
import Login from "./layouts/Login";
import Register from "./layouts/Register";
import MeditationApp from "./layouts/MeditationApp";


function App() {
  return (
    <>
    <Header/>
    <Switch>  
      <Route exact path="/">
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
    <Footer/>
    </>
    
  );
}

export default App;
