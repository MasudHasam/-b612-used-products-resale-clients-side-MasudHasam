import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from 'firebase/auth';


export const AuthContext = createContext();
const Auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loginUser, setLoginUser] = useState();
    const [loading, setLoading] = useState(true);
    const [lgUserLoading, setLgUserLoading] = useState(true);
    const [token, setToken] = useState();



    //sign up with email password
    const handleEmailSingUp = (email, password) => {
        setLoading(true)
        setLgUserLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    //email login
    const handleLogin = (email, password) => {
        setLoading(true)
        setLgUserLoading(true)
        return signInWithEmailAndPassword(Auth, email, password);
    }

    //handle google login
    const handleGoogleLogIn = () => {
        setLoading(true)
        setLgUserLoading(true)
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
            setLoading(false)
        })
        return () => unsSubscribe()
    }, [])


    //update user info
    const handleUserUpdate = (userInfo) => {
        return updateProfile(Auth.currentUser, userInfo)
    }


    //seve user to server
    const saveUser = (user) => {
        user.status = 'Not verified';
        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
    }



    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/user/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setLoginUser(data)
                    setLoading(false)
                    setLgUserLoading(false)
                })
        }
    }, [user?.email])
    // console.log(LoginUser);


    //get jwt token
    const getJwtToken = (email) => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                const token = (data?.accessToken);
                localStorage.setItem('accessToken', token);
                setToken(token)
            })
    }

    // console.log(token);

    const info = {
        handleEmailSingUp,
        handleGoogleLogIn,
        handleLogOut,
        user,
        handleUserUpdate,
        handleLogin,
        loginUser,
        saveUser,
        loading,
        lgUserLoading,
        getJwtToken,
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;