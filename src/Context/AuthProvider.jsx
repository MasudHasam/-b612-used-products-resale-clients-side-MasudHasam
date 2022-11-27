import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const Auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loginUser, setLoginUser] = useState();


    //sign up with email password
    const handleEmailSingUp = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    //email login
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password);
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




    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/user/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setLoginUser(data)
                })
        }
    }, [user?.email])
    // console.log(LoginUser);


    const info = {
        handleEmailSingUp,
        handleGoogleLogIn,
        handleLogOut,
        user,
        handleUserUpdate,
        handleLogin,
        loginUser

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;