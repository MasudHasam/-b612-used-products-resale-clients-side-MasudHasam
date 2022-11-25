import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateCurrentUser, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const Auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();


    //sign up with email password
    const handleEmailSingUp = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    //handle google login
    const handleGoogleLogIn = () => {
        return signInWithPopup(Auth, googleProvider);
    }

    //handle sign out
    const handleLogOut = () => {
        return signOut(Auth);
    }

    //get current user info
    useEffect(() => {
        const unsSubscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser)
        })
        return () => unsSubscribe()
    }, [])


    //update user info
    const handleUserUpdate = (userInfo) => {
        return updateProfile(Auth.currentUser, userInfo)
    }


    const info = {
        handleEmailSingUp,
        handleGoogleLogIn,
        handleLogOut,
        user,
        handleUserUpdate,
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;