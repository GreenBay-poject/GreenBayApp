import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Dimensions, PixelRatio } from 'react-native';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Bubble from '../../atoms/Bubble';
import PostCard from '../../atoms/post';
import { requestPublicNotes } from '../../server/noterequestgenerator';

export default function MessagePanel({ set_ministry_selected, messagetoshow }) {

    const [qna_elem, set_qna_elem] = useState([])


    // useEffect(() => {
    //     var qna_elem1 = []
    //     var i = 0
    //     messagetoshow.forEach(element => {
    //         i += 1
    //         qna_elem1.push(
    //             <Bubble key={i} by={element['uname']} ans={element['answer']} title={element['title']} question={element['question']} date={element['dateposted']} />

    //         )
    //     });
    //     set_qna_elem(qna_elem1)

    // }, [messagetoshow]);



    return (
        <ScrollView style={{ height: '80%' }} >

            {qna_elem}


        </ScrollView>

    );
}

const styles = StyleSheet.create({

});