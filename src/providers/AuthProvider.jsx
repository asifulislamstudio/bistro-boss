import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup, } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    
   
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (displayName, photo) => {
       return updateProfile ( auth.currentUser, {
            displayName : displayName, photoURL: photo
        })
    }

 
    useEffect( () => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            const userInfo = {email : currentUser?.email};
            if(currentUser){
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }else{
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    } ,[axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOutUser,
        updateUserProfile,
        loginWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;