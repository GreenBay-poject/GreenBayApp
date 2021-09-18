import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './pages/dashboard';
import { DARK_GREEN, LIGHT_SILVER, PRIMARY, SECONDARY, WHITE } from './shared/colors';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} options={styles.dashboardheader}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = {
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
