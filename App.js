import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './pages/dashboard';
import { DARK_GREEN, LIGHT_SILVER, PRIMARY, SECONDARY, WHITE } from './shared/colors';
import MyAccount from './pages/myaccount';
import PostPage from './pages/posts_page';
import NotePage from './pages/note_page';
import Land_Report_page from './pages/land_report_page';
import QnAPage from './pages/qnapage';
import * as Notifications from 'expo-notifications';
import firebase from 'firebase';
import { LogBox } from 'react-native';

// const state = {
//   notification: {},
// };

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

// LogBox.ignoreLogs(['Setting a timer']);
// const Stack = createStackNavigator();

// const RegisterPushNotificationsAsync = async () => {


//   const { status: existingStatus } = Notifications.requestPermissionsAsync()
//   let finalStatus = existingStatus;

//   if (existingStatus !== 'granted') {
//     const { status } = await Notifications.requestPermissionsAsync()
//     finalStatus = status;
//   }

//   if (finalStatus !== 'granted') {
//     return
//   }
//   console.log(finalStatus)

//   let token = (await Notifications.getExpoPushTokenAsync()).data
//   console.log(token)
//   let token_value = token.substring(
//     token.indexOf("[") + 1,
//     token.lastIndexOf("]")
//   );
//   console.log(token_value)
//   writeToken(token_value)
// }

// const writeToken = (value) => {
//   firebase.database().ref('Users/' + value).set({
//     value: true
//   }).then((data) => {
//     //success callback
//     console.log('data ', data)
//   }).catch((error) => {
//     //error callback
//     console.log('error ', error)
//   })
// }

// const _handleNotification = notification => {
//   this.setState({ notification: notification });
// };

// const _handleNotificationResponse = response => {
//   console.log(response);
// };


export default function App() {

  //   useEffect(() => {
  //     // Import the functions you need from the SDKs you need

  //     // TODO: Add SDKs for Firebase products that you want to use
  //     // https://firebase.google.com/docs/web/setup#available-libraries

  //     // Your web app's Firebase configuration
  //     const firebaseConfig = {
  //       apiKey: "AIzaSyDCS-SdSGYVluo97uAQPpm7vMsFkj4IRWs",
  //       authDomain: "greenbay-app.firebaseapp.com",
  //       projectId: "greenbay-app",
  //       storageBucket: "greenbay-app.appspot.com",
  //       messagingSenderId: "182897648478",
  //       appId: "1:182897648478:web:8343de4d708afb4a52e5cf"
  //     };

  //     // Initialize Firebase
  //     initializeApp(firebaseConfig);

  //     RegisterPushNotificationsAsync()

  //   }, [])



  // useEffect(() => {

  //   var config = {
  //     databaseURL: "https://greenbay-app-default-rtdb.firebaseio.com/",
  //     projectId: "greenbay-app",
  //   };
  //   if (!firebase.apps.length) {
  //     firebase.initializeApp(config);
  //   }

  //   console.log(firebase.apps.length)

  //   // RegisterPushNotificationsAsync()

  //   // Notifications.addNotificationReceivedListener(_handleNotification);

  //   // Notifications.addNotificationResponseReceivedListener(_handleNotificationResponse);
  // }, [])

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

