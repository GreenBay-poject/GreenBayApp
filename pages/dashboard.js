import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Chip } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import VisitWeb from '../atoms/visitweb';
import DashboardRows from '../components/dashboard_components/dash_row';
import DashboardSlider from '../components/dashboard_components/dash_slider';
import DashboardButtonTiles from '../components/dashboard_components/dash_tiles';
import { DARK_BLUE, DARK_GREEN, LIGHT_SILVER, PRIMARY, WHITE } from '../shared/colors';
import { get_email_auth } from '../storage/storemanager';

export default function Dashboard({navigation}) {

 

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.title_container}>
                <Text  style={styles.slider_header}>FEATURES</Text>
            </View>
            <DashboardSlider/>
            
            <View style={styles.title_container}>
                <Text  style={styles.tile_header}>DISCOVER</Text>
            </View>
            <DashboardButtonTiles navigation={navigation}/>
            <View style={styles.title_container}>
                <Text  style={styles.tile_header}>ACCOUNTS</Text>
            </View>
            <DashboardRows navigation={navigation}/>
            <View style={{height:40}}></View>
            <VisitWeb url="https://www.google.com"/>
        </ScrollView>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chip:{
    alignSelf:'center',
    margin:5,
  },
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
  },
  title_container: {
    flex: 1,
    backgroundColor: PRIMARY,
    marginLeft:15,
    marginBottom:15,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  slider_header:{
      color:DARK_GREEN,
      fontSize: 19,
      fontWeight:'bold'
  },
  tile_header:{
    color:DARK_GREEN,
    fontSize: 19,
    marginTop:15,
    fontWeight:'bold'
}
,posts_header:{
    color:DARK_GREEN,
    fontSize: 19,
    marginTop:15,
    fontWeight:'bold'
}
});
