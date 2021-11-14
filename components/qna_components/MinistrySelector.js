import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Dimensions, Image, PixelRatio, TouchableOpacity } from 'react-native';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import PostCard from '../../atoms/post';
import { requestPublicNotes } from '../../server/noterequestgenerator';
//all_messages={all_messages} setmessagetoshow={setmessagetoshow} set_ministry_selected={set_ministry_selected}
export default function MinistrySelector({ all_messages, setmessagetoshow, set_ministry_selected }) {

    const [btns, setbtns] = useState([])

    const icons = [
        'https://www.clipartmax.com/png/middle/226-2261834_minecraft-logo-icon-download-minecraft-logo-round-png.png',
        'https://www.nicepng.com/png/detail/148-1484057_logo-logo-wave-in-circle-clip-art.png',
        'https://w7.pngwing.com/pngs/555/160/png-transparent-round-gold-illustration-logo-gold-symbol-golden-star-logo-golden-frame-stars-medal-thumbnail.png',
        'https://mpng.subpng.com/20180419/kcw/kisspng-wikipedia-zero-wikimedia-foundation-wikimedia-comm-icon-round-logo-design-5ad8ffd6543088.7233644515241707103449.jpg',
        'https://i.pinimg.com/736x/77/46/35/774635797c28ecab22f68fac0a814087.jpg',
        'https://www.logolynx.com/images/logolynx/ea/ea10619edbda3651a7edab5a3abcdac9.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6RBUgoYKTeNWXHkPSXfltLb46hkOmeG8GQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXltPwHN04PLeHZVoJlG8qrcYh_E5B4MbPQ&usqp=CAU',
        'https://banner2.cleanpng.com/20181116/siq/kisspng-logo-sphere-vector-graphics-design-circle-circle-logo-template-r-circle-logo-template-st-5bee6124ddf142.4701721615423490929091.jpg',
        'https://w7.pngwing.com/pngs/490/231/png-transparent-round-red-and-brown-logo-circle-design-product-seal-badge-red-badges-and-labels-maroon-oval.png'
    ]

    // useEffect(() => {
    //     const btns1 = []
    //     if (all_messages.length != 0) {

    //         console.log(Object.keys(all_messages))
    //         var i = 0;
    //         Object.keys(all_messages).forEach((min_name) => {
    //             btns1.push(
    //                 <View key={i} style={{ alignItems: 'center' }}>
    //                     <TouchableOpacity style={{
    //                         marginHorizontal: 20,
    //                         width: 60,
    //                         height: 60,
    //                         justifyContent: 'center',
    //                         alignItems: 'center',
    //                         padding: 10,
    //                         borderRadius: 100,
    //                         backgroundColor: 'orange',
    //                     }}
    //                         onPress={() => {
    //                             set_ministry_selected(min_name),
    //                                 setmessagetoshow(all_messages[min_name])


    //                         }}>

    //                         <Image style={{ width: 60, height: 60 }}
    //                             source={{ uri: icons[i] }}
    //                         ></Image>
    //                     </TouchableOpacity>

    //                     <Text style={{ fontSize: 8 }}>{min_name}</Text>
    //                 </View>
    //             )
    //             i += 1
    //         })
    //         setbtns(btns1)

    //     }


    // }, [all_messages]);



    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', }}>
                {btns}
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({

});