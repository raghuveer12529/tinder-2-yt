import React from 'react';
import { View,Text,Button } from 'react-native';
import useAuth from '../hooks/useAuth';

export const LoginScreen = () => {

    const {signInWithGoogle , loading } = useAuth();
    
    return (
        <View>
            <Text>{loading ? "loading..." : "login to the app"}</Text>
            <Button title="Login" onPress={signInWithGoogle}/>
        </View>
    )
}
