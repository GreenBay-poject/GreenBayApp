import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Dimensions, PixelRatio } from 'react-native';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import PostCard from '../../atoms/post';
import { requestPrivateNotes } from '../../server/noterequestgenerator';

export default function PrivateNote({ user }) {

  const [notes, setnotes] = useState([])
  const [loading, setloading] = useState(true)
  const [selected, setselected] = useState({
    'lat': 0,
    'lon': 0,
    'note_id': 0,
    'text': ''
  })

  // useEffect(() => {
  //   requestPrivateNotes(user[0], user[1]).then((res) => {
  //     console.debug(res.data.All_Notes_user)
  //     var notes_fetched = []
  //     res.data.All_Notes_user.forEach(note => {
  //       console.log(note)
  //       notes_fetched.push(
  //         <Marker
  //           key={note['note_id']}
  //           coordinate={{ latitude: note['lat'], longitude: note['lon'] }}
  //           description={"Note ID : " + note['note_id']}
  //           title={note['text']}
  //         />
  //       )
  //     });
  //     //console.debug(notes_fetched)
  //     setnotes(notes_fetched)
  //     setselected(notes_fetched[0])
  //     setloading(false)
  //   }).catch((err) => {
  //     //console.debug(err)
  //     setloading(false)
  //   })
  //   // set note
  // }, []);


  // //console.debug(notes)


  return (
    <>
      {
        loading ?
          <ActivityIndicator
            animating={loading}
            style={[{ height: 80 }]}
            color="#C00"
            size="large"
          />
          :
          <MapView
            style={styles.mapview}
            initialRegion={{
              latitude: 7.80,
              longitude: 80.50,
              latitudeDelta: 2,
              longitudeDelta: 2,
            }}
          >
            {notes}
          </MapView>


      }
    </>

  );

}
const styles = StyleSheet.create({
  mapview: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }

});
