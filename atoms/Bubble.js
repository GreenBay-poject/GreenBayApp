import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { DARK_GREEN, LIGHT_SILVER } from '../shared/colors';

export default function Bubble({ by, ans, title, question, date }) {

  console.log(title.split('@').slice(1).join())
  var title_updated = title.split('@').slice(1).join()
  return (
    <View>
      <View style={{ marginVertical: 12, width: '80%', alignSelf: 'flex-start', backgroundColor: LIGHT_SILVER, padding: 12, borderRadius: 13 }}>
        <Text style={{ fontSize: 13, fontWeight: 'bold', marginBottom: 10 }}>{title_updated}</Text>
        <Text style={{ fontSize: 12 }}>{question}</Text>
        <Text style={{ alignSelf: 'flex-end', fontSize: 10 }}>asked by {by}</Text>
        <Text style={{ alignSelf: 'flex-end', fontSize: 10 }}>on {date}</Text>
      </View>
      {
        ans == null ?
          <View style={{ marginVertical: 12, alignSelf: 'flex-end', backgroundColor: LIGHT_SILVER, padding: 12, borderRadius: 13 }}>
            <Text style={{ fontSize: 13, alignSelf: 'flex-start', fontWeight: 'bold', marginBottom: 10 }}>Not Answered Yet</Text>
          </View>
          : <View style={{ marginVertical: 12, width: '80%', alignSelf: 'flex-end', backgroundColor: LIGHT_SILVER, padding: 12, borderRadius: 13 }}>

            <Text style={{ fontSize: 12, alignSelf: 'flex-start' }}>{ans[0]['Answere']}</Text>
            <Text style={{ alignSelf: 'flex-end', fontSize: 10 }}>answered by {ans[0]['AuthorsID']}</Text>
            <Text style={{ alignSelf: 'flex-end', fontSize: 10 }}>on {ans[0]['DatePosted']}</Text>
          </View>
      }

    </View>

  );
}

const styles = StyleSheet.create({

});
