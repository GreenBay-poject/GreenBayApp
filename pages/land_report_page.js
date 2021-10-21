import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Date_Selector from '../components/land_report/date_selector';
import Image_Viewer from '../components/land_report/image_viewer';
import Land_Report from '../components/land_report/land_report';
import Land_Report_Map from '../components/land_report/land_report_map';
export default function Land_Report_page({ navigation }) {

    /* step =0 -> select loc from map
     step =1 -> select date
     step =2 -> show image
     step =3 -> show report
     step =4 -> Start from begining

     variables needed
     -----------------
     Steps
     position
     date
     image
     reportjson
    */

    const [step, setstep] = useState(0)
    const [latitude, setlatitude] = useState(7.3)
    const [longitude, setlongitude] = useState(80)
    const [date, setdate] = useState(null)
    const [dates, setdates] = useState([])
    const [image, setimage] = useState(null)

    console.log("UPDATED LAT LON", latitude, longitude)
    return (
        <View>
            {
                step == 0 ?
                    <Land_Report_Map setdates={setdates} latitude={latitude} longitude={longitude} setlatitude={setlatitude} setlongitude={setlongitude} setstep={setstep} />
                    :
                    step == 1 ?

                        <Date_Selector dates={dates} setdates={setdates} latitude={latitude} longitude={longitude} date={date} setdate={setdate} setstep={setstep} />
                        :
                        step == 2 ?
                            <Image_Viewer latitude={latitude} longitude={longitude} date={date} image={image} setimage={setimage} setstep={setstep} />
                            :
                            step == 3 ?
                                <Land_Report image={image} setstep={setstep} />
                                : <Text>Start from begining</Text>

            }
        </View>
    );
}

const styles = StyleSheet.create({

});