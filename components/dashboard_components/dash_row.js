import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Linking, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StretchCard from '../../atoms/stretch_card';
import { DARK_GREEN, LIGHT_SILVER, PRIMARY } from '../../shared/colors';
import { AntDesign } from '@expo/vector-icons';

export default function DashboardRows({ navigation }) {
  var handleClick = () => {
    var url = "https://ibb.co/CJGGzy5"
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };
  return (
    <>
      <View style={styles.container}>
        <StretchCard navigation={navigation} imagelink="user" title="My Account" page_to_go="MyAccount" paragraph="Handle all things related to you user account" />
      </View>
      <View style={{ height: 10 }}></View>
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={handleClick}>

          <View style={styles.card}>
            {/* <View style={{ width: 5, backgroundColor: DARK_GREEN }}></View> */}
            <View style={styles.iniconcard}>
              <AntDesign name="user" size={80} color={DARK_GREEN} />
            </View>
            <View style={styles.intextcard}>
              <Text style={styles.title}>About Us</Text>
              <Text style={styles.paragraph}>Are you curious to know, who we are ... what we do ...</Text>
            </View>
            {/* <View style={{ width: 5, backgroundColor: DARK_GREEN }}></View> */}

          </View>

        </TouchableHighlight>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
    borderColor: DARK_GREEN,
    elevation: 4,
    borderRadius: 30,
    borderColor: DARK_GREEN,
    borderWidth: 1

  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: LIGHT_SILVER,
    height: 120,
    borderRadius: 30
  },

  iniconcard: {
    paddingTop: 20,
    flex: 1.5,
    backgroundColor: LIGHT_SILVER,
    fontSize: 17,
    fontWeight: 'bold',
    alignItems: 'center',
    borderRadius: 30
  },
  intextcard: {
    flex: 3,
    backgroundColor: LIGHT_SILVER,
    fontSize: 15,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  title: {
    color: DARK_GREEN,
    fontSize: 17,
    marginTop: 15,
    fontWeight: 'bold'
  },
  paragraph: {
    marginLeft: 15,
    marginRight: 15,
    color: DARK_GREEN,
    fontSize: 15,
    marginTop: 15,
    textAlign: 'center'
  }
});
