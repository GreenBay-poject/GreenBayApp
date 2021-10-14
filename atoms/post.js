import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { View, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default function PostCard({Image,Title,Description,DatePosted,email,post_id}) {
  
  var image=Image==''?'https://cdn2.wanderlust.co.uk/media/1037/forest-web.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=132605629110000000':Image

  return (
    <>
    <Card>
        <Card.Title>{Title}</Card.Title>
            <Card.Divider/>
        <Card.Image source={{uri:image}}>
        </Card.Image>
        <Text style={{marginTop: 10}}>
                {Description}
        </Text>
        <Card.Divider style={{marginTop: 10}}/>
        <Text >
                {"Posted By : " + email}
        </Text>
        <Text style={{}}>
                {"Post ID : "+post_id}
        </Text>
        <Text style={{}}>
                {"Date : "+DatePosted}
        </Text>

    </Card>
  </>
    
  );
}

const styles = StyleSheet.create({
  
});

