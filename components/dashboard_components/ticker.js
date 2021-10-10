import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import TextTicker from 'react-native-text-ticker'
import { DARK_GREEN, DARK_RED, LIGHT_SILVER, PRIMARY } from '../../shared/colors';

export default class Ticker extends PureComponent {
    render() {
        return (
            <>
                <Divider style={styles.div_top} />
                <View style={styles.container}>
                    <TextTicker
                        style={{ fontSize: 18 }}
                        scrollSpeed={40}
                        loop={true}
                        scroll={true}
                        animationType='scroll'
                        bounce={0}
                    >
                        | Notes | You may have found a special places for research,In here you can add notes to your own map.These notes are only visible for you                </TextTicker>
                </View>
                <Divider style={styles.div_bottom} />
            </>
        )
    }
}

const styles = StyleSheet.create({
    div_top: {
        marginTop: 12,

    },
    div_bottom: {
        marginBottom: 2,
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: LIGHT_SILVER,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
