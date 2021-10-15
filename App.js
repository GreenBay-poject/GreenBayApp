import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './pages/dashboard';
import { DARK_GREEN, LIGHT_SILVER, PRIMARY, SECONDARY, WHITE } from './shared/colors';
import MyAccount from './pages/myaccount';
import PostPage from './pages/posts_page';
import NotePage from './pages/note_page';
import Land_Report_page from './pages/land_report_page';
import QnAPage from './pages/qnapage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} options={styles.dashboardheader} />
        <Stack.Screen name="MyAccount" component={MyAccount} options={styles.myaccountheader} />
        <Stack.Screen name="PostPage" component={PostPage} options={styles.postpageheader} />
        <Stack.Screen name="NotePage" component={NotePage} options={styles.notepageheader} />
        <Stack.Screen name="QnAPage" component={QnAPage} options={styles.qnapageheader} />
        <Stack.Screen name="LandReportPage" component={Land_Report_page} options={styles.land_report_page_header} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = {
  land_report_page_header: {
    title: 'LAND REPORT',
    headerStyle: {
      backgroundColor: LIGHT_SILVER,

    },
    headerTintColor: SECONDARY,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,

    },

  },
  myaccountheader: {
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
  qnapageheader: {
    title: 'QnA PAGE',
    headerStyle: {
      backgroundColor: LIGHT_SILVER,

    },
    headerTintColor: SECONDARY,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,

    },
  },
  postpageheader: {
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
  },
  notepageheader: {
    title: 'NOTE PAGE',
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
