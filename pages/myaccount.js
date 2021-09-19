import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Chip } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import VisitWeb from '../atoms/visitweb';
import DashboardRows from '../components/dashboard_components/dash_row';
import DashboardSlider from '../components/dashboard_components/dash_slider';
import DashboardButtonTiles from '../components/dashboard_components/dash_tiles';
import SignInForm from '../components/myaccount/sign_in_sign_up';
import { DARK_GREEN, LIGHT_SILVER, PRIMARY, WHITE } from '../shared/colors';

export default function MyAccount({navigation}) {
  return (
    <SafeAreaView>
        <ScrollView>
            <SignInForm navigation={navigation}/>
        </ScrollView>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
