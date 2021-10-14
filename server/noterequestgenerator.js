import axios from "axios"
import { GET_PUBLIC_NOTES } from "./endpoints"

export {
    requestPublicNotes,
}


function requestPublicNotes(){
    return axios.get(GET_PUBLIC_NOTES)
}