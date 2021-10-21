import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
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
import MessagePanel from '../components/qna_components/MessagePanel';
import MinistrySelector from '../components/qna_components/MinistrySelector';
import { requestAllQuestions } from '../server/qnarequestgenerator';
import { DARK_GREEN, LIGHT_SILVER, PRIMARY, WHITE } from '../shared/colors';
import { get_email_auth, get_email_token_auth } from '../storage/storemanager';

export default function QnAPage({ navigation }) {

    const [all_messages, set_all_messages] = useState([])
    const [ministry_selected, set_ministry_selected] = useState(null)
    const [messagetoshow, setmessagetoshow] = useState([])

    const [user, setuser] = useState([null, null, false])

    useEffect(() => {

        get_email_token_auth().then(([email, token, auth]) => {
            //console.log([email,token,auth])
            const bool_auth = auth == 'true' ? true : false
            setuser([email, token, bool_auth])

            if (email != null && token != null) {
                requestAllQuestions(email, token).then((res) => {
                    console.log(res.data.ALL_QUESTIONS)
                    set_all_messages(res.data.ALL_QUESTIONS)

                }).catch((err) => {
                    console.log(err)
                })
            }



        });
    }, []);



    return (
        <SafeAreaView>
            {user[0] == null ?
                <Button title="SIGN IN" onPress={() => { navigation.navigate("MyAccount") }} color={DARK_GREEN} /> :
                <>
                    <View style={{ marginBottom: 12, borderColor: LIGHT_SILVER, borderWidth: 4, borderRadius: 10, width: '100%', alignSelf: 'center' }}></View>

                    <MinistrySelector all_messages={all_messages} setmessagetoshow={setmessagetoshow} set_ministry_selected={set_ministry_selected} />

                    <View style={{ marginTop: 12, borderColor: LIGHT_SILVER, borderWidth: 4, borderRadius: 10, width: '100%', alignSelf: 'center' }}></View>
                    {ministry_selected != null ? <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>{ministry_selected}</Text> : <></>}
                    <View style={{ marginBottom: 12, borderColor: LIGHT_SILVER, borderWidth: 4, borderRadius: 10, width: '100%', alignSelf: 'center' }}></View>

                    <MessagePanel set_ministry_selected={set_ministry_selected} messagetoshow={messagetoshow} />
                </>

            }

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});
