import { Alert } from "react-native";


export default function ShowAlert(title,msg){
    Alert.alert(
        title,
        msg,
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );

}
