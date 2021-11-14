import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Dimensions, Image, PixelRatio, TouchableOpacity } from 'react-native';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import PieChart from 'react-native-pie-chart';
import PostCard from '../../atoms/post';
import { requestPublicNotes } from '../../server/noterequestgenerator';
import { requestavailabledates, requestsateliteimage, request_land_report } from '../../server/reportrequestgenerator';
import { BLACK, DARK_GREEN, LIGHT_SILVER, PIE_CHART_COLORS, WHITE } from '../../shared/colors';
//import { PieChart } from 'expo-chart-kit'

export default function Land_Report({ image, setstep }) {

    const [report, setreport] = useState(null)
    const widthAndHeight = 250
    const [series, setseries] = useState([123, 321, 123, 789, 537])
    const [sliceColor, setsliceColor] = useState(['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800'])
    const [names, setnames] = useState([])
    const [parts, setparts] = useState([])
    const image_tag_order = [1, 4, 7, 2, 5, 8, 3, 6, 9]


    // useEffect(() => {
    //     request_land_report(image).then((res) => {
    //         console.log(res.data.Report[0])
    //         setreport(res.data.Report)
    //         var percentages = res.data.Report[0]
    //         var sliceColor1 = []
    //         var series1 = []
    //         var names1 = []
    //         var i = 0
    //         Object.keys(percentages).forEach(key => {
    //             sliceColor1.push(PIE_CHART_COLORS[key])
    //             series1.push(percentages[key])
    //             names1.push(<Text key={"KXFRF" + i} style={{ color: PIE_CHART_COLORS[key], fontSize: 18 }}>{key} : {percentages[key]} %</Text>)
    //             console.log(percentages[key])
    //             i += 1
    //         });
    //         var j = 0
    //         var parts1 = []
    //         res.data.Report[1].forEach((part) => {

    //             parts1.push(
    //                 <>

    //                     <Text key={"FECOSFWS" + j}>P{image_tag_order[j]} - {part + ""}</Text>
    //                 </>
    //             )
    //             j += 1

    //         })
    //         setparts(parts1)

    //         setsliceColor(sliceColor1)
    //         setseries(series1)
    //         setnames(names1)

    //         console.log(sliceColor, series, names)

    //     }).catch((err) => {
    //         console.log(err)
    //     })

    // }, []);

    return (
        <ScrollView>
            <View>
                <View style={{ marginTop: 0, marginBottom: 0 }}>
                    {
                        report != null ?
                            <TouchableOpacity
                                disabled={report == null}
                                style={styles.button}
                                onPress={() => { setstep(0) }}
                            >
                                <Text style={{ color: WHITE, fontSize: 14 }}>Go To Begining</Text>
                            </TouchableOpacity>
                            :
                            <ActivityIndicator
                                animating={report == null}
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
                        onPress={() => { setstep(2) }}
                    >
                        <Text style={{ color: WHITE, fontSize: 14 }}>BACK</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {names.length > 0 ?
                <>
                    <View key="Reportkey1" style={{ marginTop: 75, borderColor: DARK_GREEN, borderWidth: 1, borderRadius: 10, width: '95%', alignSelf: 'center' }}></View>
                    <Text key="Reportkey2" style={{ alignSelf: 'center', fontSize: 25, fontWeight: 'bold' }}>REPORT</Text>
                    <View key="Reportkey3" style={{ marginBottom: 42, borderColor: DARK_GREEN, borderWidth: 1, borderRadius: 10, width: '95%', alignSelf: 'center' }}></View>


                    <View key="Reportkey4" style={{ alignSelf: 'center' }}>
                        <PieChart
                            key="Reportkey5"
                            widthAndHeight={widthAndHeight}
                            series={series}
                            sliceColor={sliceColor}
                            doughnut={false}
                            coverRadius={0.45}
                            coverFill={'#FFF'}
                        />
                    </View>
                    <View style={{ marginTop: 42, borderColor: DARK_GREEN, borderWidth: 1, borderRadius: 10, width: '95%', alignSelf: 'center' }}></View>
                    <View style={{ alignSelf: 'center' }}>
                        {names}
                    </View>
                    <View style={{ marginTop: 12, borderColor: DARK_GREEN, borderWidth: 1, borderRadius: 10, width: '95%', alignSelf: 'center' }}></View>
                    <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: 'bold' }}>CONTENT</Text>
                    <View style={{ marginBottom: 12, borderColor: DARK_GREEN, borderWidth: 1, borderRadius: 10, width: '95%', alignSelf: 'center' }}></View>
                    <Image
                        style={{
                            alignSelf: 'center',
                            alignItems: 'center',
                            alignContent: 'center',
                            width: '40%',
                            height: undefined,
                            aspectRatio: 1 / 1
                        }}
                        source={{ uri: "https://www.researchgate.net/profile/Octa-Heriana/publication/322415404/figure/fig1/AS:692055437213696@1542010282106/3x3-pixel-matrix-of-image.png" }}
                    />
                    <View style={{ marginTop: 12, borderColor: DARK_GREEN, borderWidth: 1, borderRadius: 10, width: '95%', alignSelf: 'center' }}></View>
                    <View style={{ marginBottom: 45, }}>
                        {parts}
                    </View>
                </> : <></>}
        </ScrollView >

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