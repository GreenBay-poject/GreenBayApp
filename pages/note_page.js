import React, { useEffect, useState } from 'react';
import { ScrollView, Switch, Text, View } from 'react-native';
import { SafeAreaView, StyleSheet} from 'react-native';
import PrivateNote from '../components/notepage/privatenote';
import PublicNote from '../components/notepage/publicnote';
import AuthPosts from '../components/postpage/auth_posts';
import GuestsPosts from '../components/postpage/guest_posts';
import { DARK_GREEN, WHITE } from '../shared/colors';
import {get_email_token_auth} from '../storage/storemanager'
export default function NotePage({navigation}) {

    //const [posts,setposts]=useState([])
    const [user,setuser]=useState([null,null,false])
    const [isprivatemode,setisprivatemode]=useState(false)

    useEffect(()=>{

        get_email_token_auth().then(([email,token,auth])=>{
            //console.log([email,token,auth])
            const bool_auth= auth=='true'? true:false
            setuser([email,token,bool_auth])
        });
    },[]);

    //--one component--
    //Buttons add post  isatuh
    //view only my posts isauth
    // delete my posts isauth

    //--two component---
    //view all posts all 
  
    return (
    <ScrollView>
        {
            //console.log("AADA"),
            //console.log(user[0]),
            user[0]==null?
            <View ></View>:
            <View >
                <View style={styles.view}>
                <Text style={styles.text}>PRIVATE MODE</Text>
                <Switch
                    style={styles.switch}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isprivatemode ? "#f5ed4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{setisprivatemode(!isprivatemode);console.log("::::"+isprivatemode);}}
                    value={isprivatemode}
                />
                </View>
                
            </View>
        }
        {
            isprivatemode?
            <PrivateNote user={user}/>:
            <PublicNote user={user}/>
        }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    text: {
        marginTop:10, 
        fontSize:25,
        color:WHITE,
        fontWeight:'bold',
        alignSelf:'center',  
    },
    switch: {
        marginTop:5,
        alignSelf:'center',
        marginBottom:5,
    },
    view: {
        backgroundColor:DARK_GREEN,
        
    }
  
});





// export default function PostPage({navigation}) {
  
//     return (
//     <SafeAreaView>
         
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
  
// });
