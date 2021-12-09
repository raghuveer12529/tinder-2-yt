import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View,Text, Button } from 'react-native';
import useAuth from '../hooks/useAuth';

// import { Container } from './styles';

export const HomeScreen = () => {
  const navigation = useNavigation(true);
  const { logout } = useAuth();

  return (
  <View>
    <Text>Im HomeScreen</Text>
    <Button title="Go to chat Screen"  onPress={()=> navigation.navigate('Chat')}/>
    <Button title="Logout"  onPress={logout}/>
    </View>
    ) ;
}
