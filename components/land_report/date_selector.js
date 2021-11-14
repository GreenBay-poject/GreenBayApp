import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Dimensions, PixelRatio, TouchableOpacity } from 'react-native';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import PostCard from '../../atoms/post';
import { requestPublicNotes } from '../../server/noterequestgenerator';
import { requestavailabledates } from '../../server/reportrequestgenerator';
import { BLACK, DARK_GREEN, LIGHT_SILVER, WHITE } from '../../shared/colors';

export default function Date_Selector({ dates, setdates, latitude, longitude, date, setdate, setstep }) {


    console.log(date)
    console.log("Dates Length : ", dates.length)
    // useEffect(() => {

    //     if (dates.length == 0) {
    //         console.log("IM HERE")
    //         setdate(null)
    //         requestavailabledates(latitude, longitude).then((res) => {
    //             console.log(res.data.All_Dates_Available)
    //             var dates_fetched = []
    //             var i = 0
    //             res.data.All_Dates_Available.forEach(day => {
    //                 dates_fetched.push(
    //                     <TouchableOpacity
    //                         key={i}
    //                         style={styles.datesshow}
    //                         onPress={() => { setdate(day) }}
    //                     >
    //                         <Text style={{ color: BLACK, fontSize: 14 }}>{day}</Text>
    //                     </TouchableOpacity>
    //                 )
    //                 i += 1
    //             });
    //             setdates(dates_fetched)

    //         }).catch((err) => {
    //             console.log(err)
    //         })

    //     }


    // }, []);

    return (
        <View>
            <View style={{ marginTop: 0, marginBottom: 0 }}>
                {
                    dates.length != 0 ?
                        <TouchableOpacity
                            disabled={date == null}
                            style={styles.button}
                            onPress={() => { setstep(2) }}
                        >
                            <Text style={{ color: WHITE, fontSize: 14 }}>FETCH IMAGE  {date}</Text>
                        </TouchableOpacity>
                        :
                        <ActivityIndicator
                            animating={dates.length == 0}
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
                    onPress={() => { setstep(0) }}
                >
                    <Text style={{ color: WHITE, fontSize: 14 }}>BACK</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ marginTop: 20, height: '80%' }}>
                {dates}
            </ScrollView>


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