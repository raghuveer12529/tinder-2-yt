import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View,Text, Button } from 'react-native';

// import { Container } from './styles';

export const HomeScreen = () => {
  const navigation = useNavigation(true);

  return (
  <View>
    <Text>Im HomeScreen</Text>
    <Button title="Go to chat Screen"  onPress={()=> navigation.navigate('Chat')}/>
    </View>
    ) ;
}
