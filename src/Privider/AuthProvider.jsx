import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Auth-config";


export const AuthContext =createContext(null)
const AuthProvider = ({children}) => {
const [loading,setLoading]=useState(true)
const GoogleProvider = new GoogleAuthProvider();
// sining and create user in
const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const [user,SetUser]=useState({})


// on auth sate change observer
useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        SetUser(user)
        setLoading(false)
      });
},[])
console.log(user);

// log out
const logout=()=>{
    setLoading(true)
    return signOut(auth)
}


// sing in 
  
const singin = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

    //  google login
    const GoogleLogin =()=>{
       return signInWithPopup(auth,GoogleProvider)
    }
    const Authentication ={
        GoogleLogin,
        createUser,
        singin,
        user,
        logout,
        loading
    }
    return (
        <AuthContext.Provider value={Authentication}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;