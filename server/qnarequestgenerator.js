import axios from "axios"
import { GET_ALL_QUESTIONS, GET_PUBLIC_NOTES } from "./endpoints"

export {
    requestAllQuestions,
}


function requestAllQuestions(EmailFetched, TokenFetched) {
    const data = { 'email': EmailFetched }
    let config = {
        headers: {
            'Authorization': 'Bearer ' + TokenFetched
        }
    }
    return axios.post(GET_ALL_QUESTIONS, data, config)
}