import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import CustomIconButton from '../../atoms/icon_button';
import { DARK_GREEN, LIGHT_SILVER, PRIMARY } from '../../shared/colors';

export default function DashboardButtonTiles({navigation}) {
  return (
    <View style={styles.container}>
      
      <View style={{ flex: 1,flexDirection:"row",justifyContent: 'center'}}>
      <View style={{width:30,backgroundColor:DARK_GREEN}}></View>
        <View>
          <CustomIconButton page_to_go="PostPage" navigation={navigation} ant_design_icon_name="questioncircle" text="Q&A"/>
        </View>
        <View style={{width:30}}></View>
        <View>
          <CustomIconButton page_to_go="PostPage" navigation={navigation} ant_design_icon_name="areachart" text="Report"/>
        </View>
        <View style={{width:30,backgroundColor:DARK_GREEN}}></View>
      </View>
      <View style={{height:30}}></View>
      <View style={{ flex: 1,flexDirection:"row",justifyContent: 'center'}}>
      <View style={{width:30,backgroundColor:DARK_GREEN}}></View>
        <View>
          <CustomIconButton page_to_go="PostPage" navigation={navigation} ant_design_icon_name="team" text="Feed"/>
        </View>
        <View style={{width:30}}></View>
        <View>
          <CustomIconButton page_to_go="NotePage" navigation={navigation} ant_design_icon_name="book" text="Note"/>
        </View>
        <View style={{width:30,backgroundColor:DARK_GREEN}}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    flexDirection:'column'
  },
});
