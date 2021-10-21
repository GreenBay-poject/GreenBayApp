import axios from "axios"
import { GET_AVAILABLE_DATES, FETCH_SATELITE_IMAGE, GET_LAND_REPORT } from "./endpoints"

export {
    requestavailabledates,
    requestsateliteimage,
    request_land_report
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

function request_land_report(image) {

    const data = { 'url': image }
    return axios.post(GET_LAND_REPORT, data)

}