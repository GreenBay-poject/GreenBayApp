import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './pages/dashboard';
import { DARK_GREEN, LIGHT_SILVER, PRIMARY, SECONDARY, WHITE } from './shared/colors';
import MyAccount from './pages/myaccount';
import PostPage from './pages/posts_page';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} options={styles.dashboardheader}/>
        <Stack.Screen name="MyAccount" component={MyAccount} options={styles.myaccountheader}/>
        <Stack.Screen name="PostPage" component={PostPage} options={styles.postpageheader}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = {
  myaccountheader:{
    title: 'MY ACCOUNT',
    headerStyle: {
      backgroundColor: LIGHT_SILVER,
      
    },
    headerTintColor: SECONDARY,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
      
    },
  },
  postpageheader:{
    title: 'POST PAGE',
    headerStyle: {
      backgroundColor: LIGHT_SILVER,
      
    },
    headerTintColor: SECONDARY,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
      
    },
  },
  dashboardheader: {
    title: 'DASHBOARD',
    headerStyle: {
      backgroundColor: LIGHT_SILVER,
      
    },
    headerTintColor: SECONDARY,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
      
    },
  }
};
