import axios from "axios"
import { GET_USER_INFO, LOGOUT, SIGN_IN, SIGN_UP } from "./endpoints"

export {
    requestSignIn,
    requestUserData,
    requestSignUp,
    requestLogOut
}


function requestSignIn(email,password){
    const data={'email':email,'password':password}
    return axios.post(SIGN_IN,data)
}

function requestSignUp(Name_SUP,Email_SUP,Age_SUP,Address_SUP,Gender_SUP,Postal_SUP){
    const data={
        "name":Name_SUP,
        "email":Email_SUP,
        "age":Age_SUP,
        "address":Address_SUP,
        "gender":Gender_SUP,
        "postalcode":Postal_SUP
    }
    return axios.post(SIGN_UP,data)
}

function requestUserData(TokenFetched,EmailFetched){
    const data={'email':EmailFetched}
    let config = {
        headers: {
          'Authorization': 'Bearer ' + TokenFetched
        }
      }
    return axios.post(GET_USER_INFO,data,config)
}

function requestLogOut(TokenFetched,EmailFetched){
    const data={'email':EmailFetched}
    let config = {
        headers: {
          'Authorization': 'Bearer ' + TokenFetched
        }
      }
    return axios.post(LOGOUT,data,config)
}