import { StackActions } from '@react-navigation/routers';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import ShowAlert from '../../Alert/alert';
import { requestLogOut, requestUserData } from '../../server/requestgenerator';
import { DARK_GREEN, DARK_RED, LIGHT_SILVER } from '../../shared/colors';
import { get_email_token_auth, saveSignInData } from '../../storage/storemanager';
export default function Details({navigation}) {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [isauth,setisauth]=useState('');
  const [regdate,setregdate]=useState('');
  const [age,setage]=useState('');
  const [address,setaddress]=useState('');
  const [gender,setgender]=useState('');
  const [postalcode,setpostalcode]=useState('');

  const [token,settoken]=useState('');

  const [loading,setloading]=useState(true);
  
  const [logoutprocessing,setlogoutprocessing]=useState(false)

  useEffect(()=>{
    get_email_token_auth().then((data)=>{
        requestUserData(data[1],data[0]).then((res)=>{
            settoken(data[1]),
            setemail(res.data.UserDetails.useremail),
            setisauth(res.data.UserDetails.isAuthorized+''),
            setregdate(res.data.UserDetails.registered_date),
            setname(res.data.UserDetails.username),
            setage(res.data.UserDetails.age),
            setaddress(res.data.UserDetails.address),
            setgender(res.data.UserDetails.gender), 
            setpostalcode(res.data.UserDetails.postalcode),
            setloading(false)
        })
      })
  },[]);
  

  const logout=()=>{
    setlogoutprocessing(true)
    saveSignInData('','',false)
        .then((res)=>{
            console.debug("OKKK")
            requestLogOut(token,email)
            .then((res)=>{
                console.debug(res.data.Message),
                navigation.dispatch(StackActions.popToTop())
            })
            .catch((err)=>{ShowAlert('Error !',err+"");})
        })
        .catch((err)=>{ShowAlert('Error !',err+"");})
  }

  
  
  return (
    <ScrollView>
        {
        loading?
        <ActivityIndicator
            animating={loading}
            style={[{height: 80}]}
            color="#C00"
            size="large"
        />:<></>
        }
        
      <Button title="LOG OUT" disabled={logoutprocessing} onPress={() => logout()}  color={DARK_RED}/>
      {
          logoutprocessing?
          <ActivityIndicator
            animating={logoutprocessing}
            style={[{height: 80}]}
            color="#C00"
            size="large"
        />
          
          :

          
          <>
            <Text  style={styles.slider_header}>Name</Text>
      <Text  style={styles.input}>{name}</Text>

      <Text  style={styles.slider_header}>Email</Text>
      <Text  style={styles.input}>{email}</Text>

      <Text  style={styles.slider_header}>Authorized</Text>
      <Text  style={styles.input}>{isauth}</Text>

      <Text  style={styles.slider_header}>Age</Text>
      <Text  style={styles.input}>{age}</Text>

      <Text  style={styles.slider_header}>Gender</Text>
      <Text  style={styles.input}>{gender}</Text>

      <Text  style={styles.slider_header}>Address</Text>
      <Text  style={styles.input}>{address}</Text>

      <Text  style={styles.slider_header}>Postalcode</Text>
      <Text  style={styles.input}>{postalcode}</Text>
      
      <Text  style={styles.slider_header}>Reg. Date</Text>
      <Text  style={styles.input}>{regdate}</Text>
          </>
      }
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    
    input: {
      alignSelf:'stretch',
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    slider_header:{
      backgroundColor:LIGHT_SILVER,
      color:DARK_GREEN,
      fontSize: 20,
      fontWeight:'bold',
      alignSelf:'stretch',
      textAlign:'center'
  },
  });
  
  
  
