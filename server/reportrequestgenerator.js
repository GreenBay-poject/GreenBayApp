import axios from "axios"
import { GET_AVAILABLE_DATES, FETCH_SATELITE_IMAGE } from "./endpoints"

export {
    requestavailabledates,
    requestsateliteimage
}


function requestavailabledates(lat, lon) {
    return axios.get(GET_AVAILABLE_DATES,
        {
            params:
            {
                lattitude: lat,
                longitude: lon
            }
        }
    )
}

function requestsateliteimage(lat, lon, date) {
    return axios.get(FETCH_SATELITE_IMAGE,
        {
            params:
            {
                lattitude: lat,
                longitude: lon,
                date: date
            }
        }
    )
}