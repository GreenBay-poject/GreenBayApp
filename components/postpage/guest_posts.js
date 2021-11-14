import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Dimensions, PixelRatio } from 'react-native';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import PostCard from '../../atoms/post';
import { requestAllPosts } from '../../server/postrequestgenerator';

export default function GuestsPosts({ user }) {

    const [post, setposts] = useState([])
    const [page, setpage] = useState(0)
    const [pages, setpages] = useState(0)

    // useEffect(()=>{
    //     requestAllPosts().then((res)=>{
    //         const allposts=ProcessPosts(res.data.ALL_POSTS)
    //         const chunks=splitArrayIntoChunksOfLen(allposts,1);
    //         console.debug(chunks)
    //         console.debug(chunks.length)
    //         setposts(chunks.reverse())
    //         setpages(chunks.length)
    //     })


    // },[]);

    console.debug("::::-->" + pages)
    console.debug("::::-->" + page)

    var cards = []
    if (post.length != 0) {

        var i = 0
        cards = []
        post[page].forEach((post_data) => {
            cards.push(<PostCard
                key={i}
                Title={post_data['Title']}
                Image={post_data['Image']}
                Description={post_data['Description']}
                email={post_data['email']}
                post_id={post_data['post_id']}
                DatePosted={post_data['DatePosted']}
            />);
            i += 1
        },
        );
    }

    return (
        <>
            {
                post.length == 0 ?
                    <ActivityIndicator
                        animating={post.length == 0}
                        style={[{ height: 80 }]}
                        color="#C00"
                        size="large"
                        hidesWhenStopped={true}
                    />
                    :
                    <View>
                        <View style={{ height: '10%', flexDirection: "row", alignSelf: "center" }}>
                            <View style={{ alignSelf: "center", marginHorizontal: 5 }}>
                                <Button
                                    disabled={page <= 0}
                                    title="Previous"
                                    onPress={() => {
                                        setpage(page - 1),
                                            console.debug(page)
                                    }}
                                />
                            </View>
                            <View style={{ alignSelf: "center", marginHorizontal: 5 }}>
                                <Button
                                    disabled={page + 1 >= pages}
                                    title="Next"
                                    onPress={() => {
                                        setpage(page + 1)
                                        console.debug(page)
                                    }}

                                />
                            </View>
                        </View>
                        <View style={styles.scroll}>
                            {
                                cards
                            }
                        </View>


                    </View>
            }
        </>
    );
}

const styles = StyleSheet.create({

    scroll: {
        marginBottom: 100
    }

});

function ProcessPosts(response_list) {
    const Posts = []
    response_list.forEach(user_dict => {
        const user = user_dict['email']
        user_dict['posts'].forEach(post => {
            post['email'] = user;
            Posts.push(post)
        });
    });
    return Posts
}

function splitArrayIntoChunksOfLen(arr, len) {
    var chunks = [], i = 0, n = arr.length;
    while (i < n) {
        chunks.push(arr.slice(i, i += len));
    }
    return chunks;
}