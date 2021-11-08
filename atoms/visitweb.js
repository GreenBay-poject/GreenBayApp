import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { BLACK, DARK_BLUE, DARK_GREEN, DARK_RED, LIGHT_SILVER, WHITE } from '../shared/colors';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Linking from 'expo-linking';

export default function VisitWeb({ url }) {
  var handleClick = () => {

    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  return (
    <TouchableHighlight onPress={handleClick}>
      <View
        style={{
          backgroundColor: DARK_BLUE,
          height: 60,
          borderTopLeftRadius: 100,
          borderTopRightRadius: 100,
          alignItems: 'center'
        }}
      >
        <Text style={styles.tile_header}>VISIT OUR WEB</Text>
      </View>
    </TouchableHighlight>

  );
}

const styles = StyleSheet.create({
  tile_header: {
    color: WHITE,
    fontSize: 19,
    marginTop: 15,
    fontWeight: 'bold'
  }
});
