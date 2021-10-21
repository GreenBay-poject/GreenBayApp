import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import CustomIconButton from '../../atoms/icon_button';
import { DARK_GREEN, LIGHT_SILVER, PRIMARY } from '../../shared/colors';

export default function DashboardButtonTiles({ navigation }) {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

      <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center' }}>
        <View>
          <CustomIconButton page_to_go="QnAPage" navigation={navigation} ant_design_icon_name="questioncircle" text="Q&A" />
        </View>
        <View>
          <CustomIconButton page_to_go="LandReportPage" navigation={navigation} ant_design_icon_name="areachart" text="Land Report" />
        </View>
        <View>
          <CustomIconButton page_to_go="PostPage" navigation={navigation} ant_design_icon_name="team" text="Feed" />
        </View>
        <View>
          <CustomIconButton page_to_go="NotePage" navigation={navigation} ant_design_icon_name="book" text="Note" />
        </View>
        <View style={{ width: 0, backgroundColor: DARK_GREEN }}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    flexDirection: 'column'
  },
});
