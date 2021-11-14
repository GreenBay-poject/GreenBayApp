import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Dimensions, PixelRatio } from 'react-native';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import PostCard from '../../atoms/post';
import { requestPublicNotes } from '../../server/noterequestgenerator';

export default function PublicNote({ user }) {

    const [notes, setnotes] = useState([])
    const [loading, setloading] = useState(true)
    const [selected, setselected] = useState({
        'email': '',
        'lat': 0,
        'lon': 0,
        'ministry_name': '',
        'note_id': 0,
        'text': ''
    })

    // useEffect(()=>{
    //     requestPublicNotes().then((res)=>{
    //         console.debug(res.data.ALL_NOTES)
    //         var notes_fetched=[]
    //         res.data.ALL_NOTES.forEach(user => {
    //             user['notes'].forEach(note=>{
    //                 note['email']=user['email'],
    //                 note['ministry_name']=user['ministry_name']
    //                 notes_fetched.push(
    //                     <Marker
    //                         key={note['note_id']}
    //                         coordinate={{ latitude : note['lat'] , longitude : note['lon'] }}
    //                         title={note['ministry_name']}
    //                         description={note['text']}
    //                     />
    //                 )
    //             })                
    //         });
    //         console.debug(notes_fetched)
    //         setnotes(notes_fetched)
    //         setselected(notes_fetched[0])
    //         setloading(false)            
    //     }).catch((err)=>{
    //         console.debug(err)
    //         setloading(false)
    //     })
    //     // set note
    // },[]);  


    //console.debug(notes)


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