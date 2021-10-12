import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Dimensions, PixelRatio, TouchableOpacity } from 'react-native';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import PostCard from '../../atoms/post';
import { requestPublicNotes } from '../../server/noterequestgenerator';
import { DARK_GREEN, WHITE } from '../../shared/colors';

export default function Date_Selector({ setdate, setstep }) {

    const [dates, setdates] = useState([])


    useEffect(() => {



    }, []);

    return (
        <View>
            <View style={{ marginTop: 0, marginBottom: 0 }}>
                {
                    dates.length != 0 ?
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => { setstep(2) }}
                        >
                            <Text style={{ color: WHITE, fontSize: 14 }}>FETCH IMAGE</Text>
                        </TouchableOpacity>
                        :
                        <></>
                }

            </View>
            <View style={{ marginTop: 2, marginBottom: 2 }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { setstep(0) }}
                >
                    <Text style={{ color: WHITE, fontSize: 14 }}>BACK</Text>
                </TouchableOpacity>
            </View>

        </View >

    );
}

const styles = StyleSheet.create({

    button: {
        alignItems: 'center',
        backgroundColor: DARK_GREEN,
        padding: 10,
        width: '95%',
        alignSelf: 'center',
        borderRadius: 10
    },
});