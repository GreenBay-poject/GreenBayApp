import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { WHITE } from '../shared/colors';

export default function IntroCard({imagelink,title,paragraph}) {
  
const image = { uri: imagelink };
  return (
    <ImageBackground source={image} style={styles.card}>
        <Text style={styles.title}>{title}</Text>
       <Text style={styles.paragraph}>{paragraph}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 250,
    height:150,
    padding:10,
    marginHorizontal:10,
    resizeMode: 'cover',
    opacity: 0.9,
  },
  title: {
    color: WHITE,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
  }, 
  paragraph: {
    color: WHITE,
    fontSize: 15,
    textAlign:'center'
  },
});
