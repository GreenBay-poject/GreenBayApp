import axios from "axios"
import { GET_PRIVATE_NOTES, GET_PUBLIC_NOTES } from "./endpoints"

export {
    requestPublicNotes,
    requestPrivateNotes
}


function requestPublicNotes() {
    return axios.get(GET_PUBLIC_NOTES)
}

function requestPrivateNotes(EmailFetched, TokenFetched) {
    const data = { 'email': EmailFetched }
    let config = {
        headers: {
            'Authorization': 'Bearer ' + TokenFetched
        }
    }
    return axios.post(GET_PRIVATE_NOTES, data, config)
}