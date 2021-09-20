import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { requestUserData } from '../../server/requestgenerator';
import { get_email_token_auth } from '../../storage/storemanager';
export default function Details({navigation}) {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [isauth,setisauth]=useState('');
  const [regdate,setregdate]=useState('');
  const [age,setage]=useState('');
  const [address,setaddress]=useState('');
  const [gender,setgender]=useState('');
  const [postalcode,setpostalcode]=useState('');

  const [loading,setloading]=useState(true);
  

  get_email_token_auth().then((data)=>{
    requestUserData(data[1],data[0]).then((res)=>{
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

  
  
  return (
    <View>
        {
        loading?
        <ActivityIndicator
            animating={loading}
            style={[{height: 80}]}
            color="#C00"
            size="large"
            hidesWhenStopped={true}
        />:<></>
        }
        <Text>{email}</Text>
        <Text>{isauth}</Text>
        <Text>{regdate}</Text>
        <Text>{name}</Text>
        <Text>{age}</Text>
        <Text>{address}</Text>
        <Text>{gender}</Text>
        <Text>{postalcode}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
