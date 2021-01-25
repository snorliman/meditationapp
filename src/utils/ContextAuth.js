import React, { useContext, useState, useEffect } from "react";
import { auth } from "./firebase";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvaider = ({children}) => {

const [currentUser, setCurrentUser] = useState();
const [loading, setLoading] = useState(true)

function signUp(email, password) {
   return auth.createUserWithEmailAndPassword(email, password)
}
function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
}
useEffect(()=> {
    const unsubscribe =auth.onAuthStateChanged(user => {
        setLoading(false)
        setCurrentUser(user);
        console.log(currentUser)
    })
    return unsubscribe;
},[])


const value = {
    currentUser,
    signUp,
    login
}
 return (
    <AuthContext.Provider value={value}>
        {!loading &&children}
    </AuthContext.Provider>
 )
}

