import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import IntroCard from '../../atoms/card';
import { PRIMARY } from '../../shared/colors';

export default function AuthPosts() {
    const data=[
        {
          "key":"0",
          "image":'https://ak.picdn.net/shutterstock/videos/1607116/thumb/7.jpg?ip=x480',
          "title":'Sorry !!!',
          "paragraph": 'This Part Not Implemented yet.'
        },
    ]
  
    
    const cards=[]
    data.forEach(element => {
        cards.push(<IntroCard key={element.title} imagelink={element.image} title={element.title} paragraph={element.paragraph}></IntroCard>)
    })

    return (
        
        <View style={styles.container}>
        
        {cards}
        
        </View>
    );      

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:20,
      backgroundColor: PRIMARY,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
