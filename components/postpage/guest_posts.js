import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text} from 'react-native';
import PostCard from '../../atoms/post';
import { requestAllPosts } from '../../server/postrequestgenerator';

export default function GuestsPosts({user}) {

    const [post,setposts]=useState([])

    useEffect(()=>{
        requestAllPosts().then((res)=>{
            const allposts=ProcessPosts(res.data.ALL_POSTS)
            const chunks=splitArrayIntoChunksOfLen(allposts,5);
            console.debug(chunks)
            console.debug(chunks.length)
            setposts(chunks)
        })


    },[]);
  
    return (
    <SafeAreaView>
        {
            post.length==0?
            <Text>LOADING</Text>:
            <>
             <PostCard
               Title={post[0][0]['Title']}
               Image={post[0][0]['Image']}
               Description={post[0][0]['Description']}
               email={post[0][0]['email']}
               post_id={post[0][0]['post_id']}
               DatePosted={post[0][0]['DatePosted']}
            />
            </>
        }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

function ProcessPosts(response_list){
    const Posts=[]
    response_list.forEach(user_dict => {
        const user=user_dict['email']
        user_dict['posts'].forEach(post => {
            post['email']=user;
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