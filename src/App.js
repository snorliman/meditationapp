import React, { useState }from 'react';
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./layouts/HomePage";
import Login from "./layouts/Login";
import Register from "./layouts/Register";
import PrivetRoute from "./utils/PrivetRoute";
import MeditationApp from "./layouts/MeditationApp";
import { AuthProvaider } from "./utils/ContextAuth";


function App() {
    const [register, setRegister] = useState(true);
    const [login, setLogin] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

  return (
    <AuthProvaider>
    <Header login={login}/>
    <Switch>  
      <Route exact path="/">
        <HomePage/>
      </Route>
      <Route path="/zaloguj">
        <Login
        password={password}
        register={register}
        setLogin={setLogin}
        login={login}
        email={email}/>
      </Route>
      <Route path="/rejestracja">
        <Register 
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail} 
        setPassword={setPassword}
        password={password}
        confirmPassword={confirmPassword} 
        setConfirmPassword={setConfirmPassword} 
        register={register}
        setRegister={setRegister}/>
      </Route>
      <PrivetRoute path="/aplikacja">
        <MeditationApp
        login={login}/>
      </PrivetRoute>
    </Switch>
    <Footer/>
    </AuthProvaider>
    
  );
}

export default App;
