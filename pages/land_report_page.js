import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import Date_Selector from '../components/land_report/date_selector';
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
    const [image, setimage] = useState(null)
    const [report, setreport] = useState(null)

    console.log("UPDATED LAT LON", latitude, longitude)
    return (
        <ScrollView>
            {
                step == 0 ?
                    <Land_Report_Map latitude={latitude} longitude={longitude} setlatitude={setlatitude} setlongitude={setlongitude} setstep={setstep} />
                    :
                    step == 1 ?

                        <Date_Selector setstep={setstep} />
                        :
                        step == 2 ?
                            <Text>Image</Text>
                            :
                            step == 3 ?
                                <Text>Report</Text>
                                : <Text>Start from begining</Text>

            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({

});