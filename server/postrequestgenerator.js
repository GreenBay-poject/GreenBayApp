import axios from "axios"
import { GET_ALL_POSTS } from "./endpoints"

export {
    requestAllPosts,
}


function requestAllPosts(){
    return axios.get(GET_ALL_POSTS)
}