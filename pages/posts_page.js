import React, { useEffect, useState } from 'react';
import { Switch, Text, View } from 'react-native';
import { SafeAreaView, StyleSheet} from 'react-native';
import AuthPosts from '../components/postpage/auth_posts';
import GuestsPosts from '../components/postpage/guest_posts';
import { DARK_GREEN, WHITE } from '../shared/colors';
import {get_email_token_auth} from '../storage/storemanager'
export default function PostPage({navigation}) {

    //const [posts,setposts]=useState([])
    const [user,setuser]=useState(['','',false])
    const [isauthmode,setisauthmode]=useState(false)

    useEffect(()=>{

        get_email_token_auth().then(([email,token,auth])=>{
            console.log([email,token,auth])
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
    <SafeAreaView>
        {
            console.log("AADA"),
            console.log(user[2]),
            !user[2]?
            <>
                <View style={styles.view}>
                <Text style={styles.text}>AUTH MODE</Text>
                <Switch
                    style={styles.switch}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isauthmode ? "#f5ed4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{setisauthmode(!isauthmode);console.log("::::"+isauthmode);}}
                    value={isauthmode}
                />
                </View>
                
            </>:
            <></>
        }
        {
            isauthmode?
            <>
              <AuthPosts user={user}/>
            </>
            :
            <>
               <GuestsPosts user={user}/>
            </>
        }
         
    </SafeAreaView>
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
