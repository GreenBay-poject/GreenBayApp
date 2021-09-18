import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StretchCard from '../../atoms/stretch_card';
import { PRIMARY } from '../../shared/colors';

export default function DashboardRows() {
  return (
    <View style={styles.container}>
      <StretchCard imagelink="user" title="My Account" paragraph="Handle all things related to you user account" />
    </View>
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
