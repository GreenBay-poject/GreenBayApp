import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Dimensions, Image, PixelRatio, TouchableOpacity } from 'react-native';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import PostCard from '../../atoms/post';
import { requestPublicNotes } from '../../server/noterequestgenerator';
import { requestavailabledates, requestsateliteimage } from '../../server/reportrequestgenerator';
import { BLACK, DARK_GREEN, LIGHT_SILVER, WHITE } from '../../shared/colors';

export default function Image_Viewer({ latitude, longitude, date, image, setimage, setstep }) {



    // useEffect(() => {
    //     setimage(null)
    //     requestsateliteimage(latitude, longitude, date).then((res) => {
    //         console.log(res.data)
    //         setimage(res.data.Image.Url)

    //     }).catch((err) => {
    //         console.log(err)
    //     })

    // }, []);

    return (
        <View>
            <View style={{ marginTop: 0, marginBottom: 0 }}>
                {
                    image != null ?
                        <TouchableOpacity
                            disabled={image == null}
                            style={styles.button}
                            onPress={() => { setstep(3) }}
                        >
                            <Text style={{ color: WHITE, fontSize: 14 }}>GET REPORT</Text>
                        </TouchableOpacity>
                        :
                        <ActivityIndicator
                            animating={image == null}
                            style={[{ height: 80 }]}
                            color="#C00"
                            size="large"
                            hidesWhenStopped={true}
                        />
                }

            </View>
            <View style={{ marginTop: 2, marginBottom: 2 }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { setstep(1) }}
                >
                    <Text style={{ color: WHITE, fontSize: 14 }}>BACK</Text>
                </TouchableOpacity>
            </View>
            <Image
                style={{
                    width: '100%',
                    height: undefined,
                    aspectRatio: 1 / 1
                }}
                source={{ uri: image }}
            />


        </View >

    );
}

const styles = StyleSheet.create({
    datesshow: {
        alignItems: 'center',
        backgroundColor: LIGHT_SILVER,
        padding: 10,
        width: '100%',
        marginBottom: 2,
        alignSelf: 'center'

    },

    button: {
        alignItems: 'center',
        backgroundColor: DARK_GREEN,
        padding: 10,
        width: '95%',
        alignSelf: 'center',
        borderRadius: 10
    },
});