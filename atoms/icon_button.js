import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { DARK_GREEN, LIGHT_SILVER } from '../shared/colors';

export default function CustomIconButton({ant_design_icon_name,text}) {
  return (
      <TouchableHighlight  onPress={()=>{}}>
        <View  style={styles.button}>
        <AntDesign name={ant_design_icon_name} size={70} color={DARK_GREEN} />
          <Text  style={styles.text}>{text}</Text>
        </View>
      </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    elevation:2,
    borderColor:DARK_GREEN,
    borderWidth:0.28,
    padding:10,
    width:120,
    flex: 1,
    backgroundColor: LIGHT_SILVER,
    alignItems: 'center',
  },
  text: {
    color:DARK_GREEN,
    fontSize: 18,
    fontWeight:'bold'
  },
});
