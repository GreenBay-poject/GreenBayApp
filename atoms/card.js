import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { DARK_GREEN, LIGHT_SILVER, WHITE } from '../shared/colors';

export default function IntroCard({ imagelink, title, paragraph }) {

  const image = { uri: imagelink };
  return (
    // <ImageBackground source={{ uri: 'https://media.istockphoto.com/photos/grey-marble-background-texture-picture-id1163011854?b=1&k=20&m=1163011854&s=170667a&w=0&h=8wBsFQeHY0NLeXMOU1HMA7Vl16q-Tov75qHyQGLdJ84=' }} style={styles.card}>
    //   <Text style={styles.title}>{title}</Text>
    //   <Text style={styles.paragraph}>{paragraph}</Text>
    // </ImageBackground>
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.paragraph}>{paragraph}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: DARK_GREEN,
    flex: 1,
    width: 250,
    height: 150,
    padding: 10,
    backgroundColor: LIGHT_SILVER,
    marginHorizontal: 10,
    resizeMode: 'cover',
    opacity: 0.9,
  },
  title: {
    color: DARK_GREEN,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    color: DARK_GREEN,
    fontSize: 15,
    textAlign: 'center'
  },
});
