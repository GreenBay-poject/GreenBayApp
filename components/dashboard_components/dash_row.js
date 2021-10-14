import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StretchCard from '../../atoms/stretch_card';
import { PRIMARY } from '../../shared/colors';

export default function DashboardRows({navigation}) {
  return (
    <>
    <View style={styles.container}>
      <StretchCard navigation={navigation} imagelink="user" title="My Account" page_to_go="MyAccount" paragraph="Handle all things related to you user account" />
    </View>
    <View style={{height:10}}></View>
    <View style={styles.container}>
      <StretchCard imagelink="info" title="About Us" paragraph="If you want to about us, we are ready to share it" />
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
