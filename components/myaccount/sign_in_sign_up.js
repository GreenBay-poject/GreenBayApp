import { StackActions } from "@react-navigation/routers";
import React from "react";
import { ActivityIndicator, Button, Picker, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import ShowAlert from "../../Alert/alert";
import { SIGN_IN } from "../../server/endpoints";
import { requestSignIn, requestSignUp, requestUserData } from "../../server/requestgenerator";
import { DARK_BLUE, DARK_GREEN, DARK_RED, LIGHT_SILVER, WHITE } from "../../shared/colors";
import { saveSignInData } from "../../storage/storemanager";

export default function SignInForm({navigation}){
  const [Email, onChangeEmail] = React.useState('');
  const [Password, onChangePassword] = React.useState('');
  const [isSignIN, onChangeForm] = React.useState(true);

  const [anim, setanim] = React.useState(false);

  const [Email_SUP, onChangeEmail_SUP] = React.useState('');
  const [Name_SUP, onChangeName_SUP] = React.useState('');
  const [Age_SUP, onChangeAge_SUP] = React.useState(-1);
  const [Address_SUP, onChangeAddress_SUP] = React.useState('');
  const [Gender_SUP, onChangeGender_SUP] = React.useState('');
  const [Postal_SUP, onChangePostal_SUP] = React.useState('');



  const signup=()=>{
    setanim(true)
    
    if(Name_SUP+''.length<2){
      ShowAlert('Error !','Min. Name Length is 2')
      setanim(false)
      return
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(Email_SUP)){
      ShowAlert('Error !', 'Invalid Email Format')
      setanim(false)
      return
    }
    var int_age=parseInt(Age_SUP+'')
    const isValidAge=9<int_age && int_age<120
    console.debug(isValidAge)
    if(!isValidAge){
      ShowAlert('Error !','Min. Age is 10 and Max is 120')
      setanim(false)
      return
    }
    if(Address_SUP+''.length<10){
      ShowAlert('Error !','Min. Address Length is 10')
      setanim(false)
      return
    }
    if(Postal_SUP+''.length<3){
      ShowAlert('Error !','Min. Postal Length is 3')
      setanim(false)
      return
    }
    requestSignUp(Name_SUP,Email_SUP,Age_SUP,Address_SUP,Gender_SUP,Postal_SUP)
    .then((res)=>{
      console.debug(res.data.content);
      setanim(false);
      onChangeForm(true);
      ShowAlert('Error !',res.data.content+"\nYour Password sent to email. Please check email and sign in again.");
    })
    .catch((err)=>{
      console.debug(err.response.data.Message);
      ShowAlert('Error !',err.response.data.Message);
      setanim(false)
    })
  
    // fetch sign in
    // if failed msg set to failes
    // ok run fetch user data
    // save user data in async store
    // clear stack and go to home

  
  }

  const signin=()=>{
    setanim(true)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(Email)){
      ShowAlert('Error !', 'Invalid Email Format')
      setanim(false)
      return
    }
    if(Password.length<6){
      ShowAlert('Error !','Min. Password Length is 6')
      setanim(false)
      return
    }
    requestSignIn(Email,Password)
    .then((res)=>{
      console.debug(res.data);
      console.debug(res.data.UserEmail);
      console.debug(res.data.Token.value);
      var TokenFetched=res.data.Token.value;
      var EmailFetched=res.data.UserEmail;
      requestUserData(TokenFetched,EmailFetched)
      .then((res)=>{
        saveSignInData(EmailFetched,TokenFetched,res.data.UserDetails.isAuthorized)
        .then((res)=>{
          console.debug(res),
          navigation.dispatch(StackActions.popToTop())
        })
        .catch((err)=>{ShowAlert('Error !',err+"");setanim(false)})
      })
      .catch((err)=>{ShowAlert('Error !',err.response.data.Message);setanim(false)})


    })
    .catch((err)=>{
      console.debug(err.response.data.Message);
      ShowAlert('Error !',err.response.data.Message);
      setanim(false)
    })
  
    // fetch sign in
    // if failed msg set to failes
    // ok run fetch user data
    // save user data in async store
    // clear stack and go to home

  
  }
  
  return (
    <SafeAreaView style={styles.container}>
      {
        anim?
        <ActivityIndicator
            animating={anim}
            style={[{height: 80}]}
            color="#C00"
            size="large"
            hidesWhenStopped={true}
      />:<></>

      }
      
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
      <Button title="SIGN IN" disabled={anim} onPress={() => {signin()}}  color={DARK_GREEN}/>
      </View>
      {
        !anim?
        <Text onPress={() => {onChangeForm(false)}} style={styles.below_button}>Don't Have Account</Text>
        :<></>
      }
      
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
      <Button title="SIGN UP" disabled={anim} onPress={() => {signup()}}  color={DARK_RED}/>
      </View>
      {
        !anim?
        <Text onPress={() => {onChangeForm(true)}} style={styles.below_button}>Already Registered ...</Text>
        :<></>
      }
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
    color:DARK_BLUE,
    alignItems: 'center',
    padding: 10
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


