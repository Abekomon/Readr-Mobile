import React, {useEffect, useState} from 'react';
import HomeScreen from './HomeScreen';
import ArticleModal from './ArticleModal';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, ScrollView, RefreshControl, Modal, SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          header: () => null
        }}
      >
        <Stack.Screen name="Article" component={ArticleModal} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
