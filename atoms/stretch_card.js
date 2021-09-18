import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { BLACK, DARK_BLUE, DARK_GREEN, DARK_RED, LIGHT_SILVER, WHITE } from '../shared/colors';
import { AntDesign } from '@expo/vector-icons';
export default function StretchCard({imagelink,title,paragraph}) {
  

  return (
      <TouchableHighlight style={styles.button} onPress={()=>{}}>
          
          <View style={styles.card}>
          <View style={{width:5,backgroundColor:DARK_RED}}></View>
        <View style={styles.iniconcard}>
        <AntDesign name={imagelink} size={80} color={DARK_BLUE} />
        </View>
        <View style={styles.intextcard}>
        <Text  style={styles.title}>{title}</Text>
        <Text  style={styles.paragraph}>{paragraph}</Text>
        </View>
        <View style={{width:5,backgroundColor:DARK_RED}}></View>

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
    height:120,
  },

  iniconcard: {
      paddingTop:20,
    flex:1.5,
    backgroundColor: LIGHT_SILVER,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems:'center'
  }, 
  intextcard: {
    flex:3,
    backgroundColor: LIGHT_SILVER,
    fontSize: 15,
    textAlign:'center',
    alignItems:'center'
  },
  title:{
    color:DARK_BLUE,
    fontSize: 21,
    marginTop:15,
    fontWeight:'bold'
},
paragraph:{
    marginLeft:15,
    marginRight:15,
    color:DARK_BLUE,
    fontSize: 15,
    marginTop:15,
    textAlign:'center'
}
});
