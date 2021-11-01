import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import TextTicker from 'react-native-text-ticker'
import { DARK_GREEN, DARK_RED, LIGHT_SILVER, PRIMARY } from '../../shared/colors';

export default class Ticker extends PureComponent {
    render() {
        return (
            <View style={{ marginTop: 12, borderColor: DARK_GREEN, borderWidth: 1, borderRadius: 10, width: '95%', alignSelf: 'center' }}>
                {/* <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginTop: 12,
                    }}
                /> */}
                <View style={styles.container}>
                    <TextTicker
                        style={{ fontSize: 15 }}
                        scrollSpeed={40}
                        loop={true}
                        scroll={true}
                        animationType='scroll'
                        bounce={0}
                    >
                        Get deforestation report on selected area. To generate report we use AI techniques. View private notes by you and public notes by authority users. You can view the answeres supplied by ministry officers to arising questions. You can ask questions thorugh our website. The authorities publish posts in this platform. You can observe them and update your knowledge                </TextTicker>
                </View>
                {/* <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginBottom: 12,
                    }}
                /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({

    div_bottom: {
        marginBottom: 2,
    },
    container: {
        borderRadius: 10,
        flex: 1,
        padding: 5,
        backgroundColor: LIGHT_SILVER,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
