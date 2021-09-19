import React from "react";
import { Button, Picker, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import Process from "../../server/requestgenerator";
import { DARK_GREEN, DARK_RED, LIGHT_SILVER, WHITE } from "../../shared/colors";

export default function SignInForm({navigation}){
  const [Email, onChangeEmail] = React.useState('');
  const [Password, onChangePassword] = React.useState('');
  const [isSignIN, onChangeForm] = React.useState(true);

  const [msg, setmsg] = React.useState('');

  const [Email_SUP, onChangeEmail_SUP] = React.useState('');
  const [Name_SUP, onChangeName_SUP] = React.useState('');
  const [Age_SUP, onChangeAge_SUP] = React.useState(-1);
  const [Address_SUP, onChangeAddress_SUP] = React.useState('');
  const [Gender_SUP, onChangeGender_SUP] = React.useState('');
  const [Postal_SUP, onChangePostal_SUP] = React.useState('');

  const signin=()=>{

    if(Password.length<6){
      setmsg('Min. Password Length is 6')
      return
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(Email)){
      setmsg('Invalid Email Format')
      return
    }
    Process('https://reqres.in/api/users','GET',null,{'page':2},{
      "name": "morpheus",
      "job": "leader"
  }).then((res)=>{console.debug(res)}).catch((err)=>{console.debug(err)})
    // fetch sign in
    // if failed msg set to failes
    // ok run fetch user data
    // save user data in async store
    // clear stack and go to home

  
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text  style={styles.msg}>{msg}</Text>
      {
        isSignIN==true?
        <>
      <Text  style={styles.slider_header}>SIGN IN</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={Email}
        placeholder="Email"
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={onChangePassword}
        value={Password}
        placeholder="Password"
      />
      <View style={styles.signin_button}>
      <Button title="SIGN IN" onPress={() => {signin()}}  color={DARK_GREEN}/>
      </View>
      <View style={styles.below_button}>
      <Button title="SIGN UP"  onPress={() => {onChangeForm(false)}} color={DARK_RED}/>
      </View>
      </>
      :
      <>
      <Text  style={styles.slider_header}>SIGN UP</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName_SUP}
        value={Name_SUP}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail_SUP}
        value={Email_SUP}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeAge_SUP}
        value={Age_SUP}
        placeholder="Age"
        keyboardType='numeric'
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeAddress_SUP}
        value={Address_SUP}
        placeholder="Address"
      />
      <Picker
        selectedValue={Gender_SUP}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => onChangeGender_SUP(itemValue)}
      >
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>
      <TextInput
        style={styles.input}
        onChangeText={onChangePostal_SUP}
        value={Postal_SUP}
        placeholder="Postalcode"
      />
      <View style={styles.signin_button}>
      <Button title="SIGN UP"  color={DARK_RED}/>
      </View>
      <View style={styles.signin_button}>
      <Button title="SIGN IN"  onPress={() => {onChangeForm(true)}} color={DARK_GREEN}/>
      </View>
      </>
      }
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  msg:{
    color:DARK_RED,
    fontSize: 16,
    fontWeight:'bold',
    alignSelf:'stretch',
    textAlign:'center'},

  signin_button:{
    elevation:4,
    alignSelf:'stretch',
    marginHorizontal:20,
    backgroundColor:DARK_GREEN,
    marginBottom:10,
  },
  below_button:{
    
    alignSelf:'stretch',
    marginHorizontal:20,
    backgroundColor:WHITE, 
    marginBottom:10,
  },
  container:{
      alignItems:'center'
  }, 
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
    fontSize: 26,
    fontWeight:'bold',
    alignSelf:'stretch',
    textAlign:'center'
},
});


