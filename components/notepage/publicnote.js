import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Dimensions, PixelRatio } from 'react-native';
import { SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import PostCard from '../../atoms/post';
import { requestPublicNotes } from '../../server/noterequestgenerator';

export default function PublicNote({user}) {

    const [notes,setnotes]=useState([])
    const [loading,setloading]=useState(true)
    const [selected,setselected]=useState({
        'email':'',
        'lat':0,
        'lon':0,
        'ministry_name':'',
        'note_id':0,
        'text':''
    })

    useEffect(()=>{
        requestPublicNotes().then((res)=>{
            console.debug(res.data.ALL_NOTES)
            var notes_fetched=[]
            res.data.ALL_NOTES.forEach(user => {
                user['notes'].forEach(note=>{
                    note['email']=user['email'],
                    note['ministry_name']=user['ministry_name']
                    notes_fetched.push(note)
                })                
            });
            console.debug(notes_fetched)
            setnotes(notes_fetched)
            setselected(notes_fetched[0])
            setloading(false)            
        }).catch((err)=>{
            console.debug(err)
            setloading(false)
        })
        // set note
    },[]);  
    

    //console.debug(notes)

   
    return (
        <>
        {
            loading?
                <ActivityIndicator
                animating={loading}
                style={[{height: 80}]}
                color="#C00"
                size="large"
                />
            :
            <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
            />

        
        }
        </>
        
    );
}

const styles = StyleSheet.create({

});