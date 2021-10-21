import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Dimensions, PixelRatio, TouchableOpacity } from 'react-native';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import PostCard from '../../atoms/post';
import { requestPublicNotes } from '../../server/noterequestgenerator';
import { DARK_GREEN, WHITE } from '../../shared/colors';

export default function Land_Report_Map({ setdates, latitude, longitude, setlatitude, setlongitude, setstep }) {


    useEffect(() => {

    }, []);

    console.log(latitude)
    console.log(longitude)

    return (
        <View>
            <View style={{ marginTop: 0, marginBottom: 0 }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { setdates([]), setstep(1) }}
                >
                    <Text style={{ color: WHITE, fontSize: 18 }}>GET DATES</Text>
                </TouchableOpacity>
            </View>
            <MapView
                style={styles.mapview}
                initialRegion={{
                    latitude: 7.80,
                    longitude: 80.50,
                    latitudeDelta: 2,
                    longitudeDelta: 2,
                }}
            >
                <Marker
                    title="SELECT LOCATION"
                    description="Long tap to start dragging"
                    coordinate={{ latitude: latitude, longitude: longitude }}
                    draggable={true}
                    onDragEnd={(e) => { console.log(e.nativeEvent.coordinate), setlatitude(e.nativeEvent.coordinate.latitude), setlongitude(e.nativeEvent.coordinate.longitude) }}
                />
            </MapView>
        </View>

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
    mapview: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }

});