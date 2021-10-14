import { AsyncStorage } from "react-native";

export {
    saveSignInData,
    get_email_auth,
    get_email_token_auth
}

var saveSignInData = async (email,token,isauth) => {
      await AsyncStorage.setItem(
        'EMAIL',
        email
      );
      await AsyncStorage.setItem(
        'TOKEN',
        token
      );
      await AsyncStorage.setItem(
        'ISAUTH',
        isauth+''
      );
};

var get_email_token_auth =async () => {
    const email=await AsyncStorage.getItem(
      'EMAIL'
    );
    const token=await AsyncStorage.getItem(
      'TOKEN'
    );
    const isauth=await AsyncStorage.getItem(
        'ISAUTH'
      );

    return [email,token,isauth]
};

var get_email_auth = async () => {
    const email=await AsyncStorage.getItem(
      'EMAIL'
    );
    const isauth=await AsyncStorage.getItem(
      'ISAUTH'
    );

    return [email,isauth]
};