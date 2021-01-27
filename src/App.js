import React, { useState, useEffect }from 'react';
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./layouts/HomePage";
import Login from "./layouts/Login";
import Register from "./layouts/Register";
import PrivetRoute from "./utils/PrivetRoute";
import MeditationApp from "./layouts/MeditationApp";
import firebase, { auth, usersCollection } from "./utils/firebase";

function App() {
  


  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true)
  
  useEffect(()=> {
      const unsubscribe =auth.onAuthStateChanged(user => {
          if(user) {
              setLoading(false)
              setCurrentUser(user)
  
              usersCollection.doc(user.uid)
  
              
          
      } else auth.signOut();
  })
      return unsubscribe;
  },[currentUser])

  return (
    <>
    <Header user={currentUser}/>
    <Switch>  
      <Route exact path="/">
        <HomePage/>
      </Route>
      <Route path="/zaloguj">
        <Login
        />
      </Route>
      <Route path="/rejestracja">
        <Register/>
      </Route>
      <PrivetRoute path="/aplikacja" user={currentUser}>
        <MeditationApp
        />
      </PrivetRoute>
    </Switch>
    <Footer/>
    </>
    
  );
}

export default App;
