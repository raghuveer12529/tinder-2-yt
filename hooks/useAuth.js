import React,{createContext, useContext} from 'react'

import * as Google from "expo-google-app-auth"

const AuthContext = createContext({});

const config = {
    androidClientId: '935383251440-brrtq70lo5ck14dt30d8akcgtfajp15n.apps.googleusercontent.com',
    iosClientId: '935383251440-febnqugkk6s0kmu20750vdsisvfh0hn3.apps.googleusercontent.com',
    scopes : ["profile", "email"],
    permissions : ["public_profile","email","gender","location"],
}

export const AuthProvider = ({ children }) => {

    const signInWithGoogle = async () => {
         Google.logInAsync(config).then(async (logInResult)=>{
            if(logInResult.type == 'success'){
                // login
            }
        });
    };

    return (
        <AuthContext.Provider  value ={
            {
                user : null,
                signInWithGoogle
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth(){

    return useContext(AuthContext);
}