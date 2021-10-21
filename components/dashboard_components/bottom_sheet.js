import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Linking, StyleSheet, Text, View } from 'react-native';
import { BottomSheet, ListItem } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import StretchCard from '../../atoms/stretch_card';
import { DARK_GREEN, PRIMARY, WHITE } from '../../shared/colors';

export default function DashBoardBottomSheet({ isVisible, setIsVisible }) {
    var handleClick = (url) => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log("Don't know how to open URI: " + url);
            }
        });
    };

    const list = [
        { title: 'Web', containerStyle: styles.containerStyle, titleStyle: styles.title, onPress: () => { handleClick("http://52.14.144.199/") } },
        { title: 'YouTube', containerStyle: styles.containerStyle, titleStyle: styles.title, },
        { title: 'LinkedIn', containerStyle: styles.containerStyle, titleStyle: styles.title, },
        {
            title: 'Cancel',
            titleStyle: styles.cancel,
            containerStyle: styles.cancelcontainerStyle,
            onPress: () => { setIsVisible(false) }
        },
    ];
    return (
        <>
            <BottomSheet
                isVisible={isVisible}
                containerStyle={{ backgroundColor: 'rgba(255,0,0,0.0)' }}

            >
                <View style={{ backgroundColor: 'white', borderTopLeftRadius: 50, borderTopRightRadius: 50, borderWidth: 1, borderColor: DARK_GREEN }}>
                    <Image style={styles.gif} source={require('../../assets/treesave.png')} />
                </View>


                {list.map((l, i) => (
                    <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                        <ListItem.Content>
                            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}

            </BottomSheet>

        </>

    );
}

const styles = StyleSheet.create({
    gif: {
        width: '80%',
        height: undefined,
        aspectRatio: 1280 / 978,
        alignSelf: 'center'
    },
    containerStyle: {
        backgroundColor: DARK_GREEN,
        borderColor: 'white',
        borderWidth: 2,
        alignSelf: 'center',
    },
    cancelcontainerStyle: {
        backgroundColor: WHITE,
        borderColor: 'white',
        alignSelf: 'center',
    },
    title: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 15
    },
    cancel: {
        color: DARK_GREEN,
        alignSelf: 'center',
        fontSize: 15
    },
});





