import React,{createContext, useContext, useEffect, useMemo, useState} from 'react'

import * as Google from "expo-google-app-auth"
import { 
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
    signOut,
 } from 'firebase/auth';
 import {auth} from '../firebase';

const AuthContext = createContext({});

const config = {
    androidClientId: '935383251440-brrtq70lo5ck14dt30d8akcgtfajp15n.apps.googleusercontent.com',
    iosClientId: '935383251440-febnqugkk6s0kmu20750vdsisvfh0hn3.apps.googleusercontent.com',
    scopes : ["profile", "email"],
    permissions : ["public_profile","email","gender","location"],
}

export const AuthProvider = ({ children }) => {

    const [error,setError] = useState(null);
    const [user,setUser] = useState(null);
    const [loadingInitial , setLoadingInitial] = useState(true);
    const [loading,setLoading] = useState(false);


    useEffect(
        () => 
        onAuthStateChanged(auth , (user)=>{
            if (user){
                // Logged in 
                setUser(user);
            }else{
                // not logged in 
                setUser(null);
            }
            setLoadingInitial(false);
        }),
        []
        );

    const logout = () =>{
        setLoading(true);

        signOut(auth).catch((error)=> setError(error)).finally(setLoading(false));
    }

    const signInWithGoogle = async () => {
        setLoading(true);
       await  Google.logInAsync(config).then(async (logInResult)=>{
            if(logInResult.type == 'success'){
                  const {idToken, accessToken} = logInResult;
                  const credential = GoogleAuthProvider.credential(idToken, accessToken);
                  await signInWithCredential(auth , credential);
            }else{
                return Promise.reject();
            }
        }).catch(error => setError(error))
        .finally(()=> setLoading(false));
        
    };

    const memoedValue = useMemo(()=>({
        user,
        loading,
        error,
        signInWithGoogle,
        logout
    }), [user, loading , error]);

    return (
        <AuthContext.Provider  value ={memoedValue}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    )
}

export default function useAuth(){

    return useContext(AuthContext);
}