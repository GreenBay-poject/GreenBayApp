import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PRIMARY } from '../../shared/colors';

export default function DashboardSwitchingPosts() {
  return (
    <View style={styles.container}>
      <Text>I am switch posts</Text>
      <StatusBar style="auto" />
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
