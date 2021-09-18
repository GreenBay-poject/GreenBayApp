import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { DARK_GREEN, LIGHT_SILVER, WHITE } from '../shared/colors';
import { AntDesign } from '@expo/vector-icons';
export default function StretchCard({imagelink,title,paragraph}) {
  

  return (
      <TouchableHighlight style={styles.button} onPress={()=>{}}>
          <View style={styles.card}>
        <View style={styles.iniconcard}>
        <AntDesign name={imagelink} size={80} color={WHITE} />
        </View>
        <View style={styles.intextcard}>

        </View>

    </View>

      </TouchableHighlight>
    
  );
}

const styles = StyleSheet.create({
    button:{
        alignSelf:'stretch',
        marginHorizontal:20,
        borderColor:DARK_GREEN,
        elevation:4,

    },
  card: {
    flex: 1,
    flexDirection:'row',
    alignSelf:'stretch',
    backgroundColor:LIGHT_SILVER,
    height:150,
  },

  iniconcard: {
      paddingTop:30,
    flex:1.5,
    backgroundColor: DARK_GREEN,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems:'center'
  }, 
  intextcard: {
    flex:3,
    backgroundColor: LIGHT_SILVER,
    fontSize: 15,
    textAlign:'center'
  },
});
