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
import Details from '../components/myaccount/details';
import SignInForm from '../components/myaccount/sign_in_sign_up';
import { DARK_GREEN, LIGHT_SILVER, PRIMARY, WHITE } from '../shared/colors';
import { get_email_auth } from '../storage/storemanager';

export default function MyAccount({navigation}) {
  const [email,setemail]=useState('');

  get_email_auth().then((data)=>{
    setemail(data[0]);
  })
  return (
    <SafeAreaView>
      {
        email!=null && email.length>2?
        <Details navigation={navigation}/>
        :
        <SignInForm navigation={navigation}/>
      }      
            
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
