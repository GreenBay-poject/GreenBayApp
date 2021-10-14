import { HOST } from "./host"

export const SIGN_IN = HOST + "/auth/login"
export const GET_USER_INFO = HOST + "/auth/get_user_info"
export const SIGN_UP = HOST + "/auth/register"
export const LOGOUT = HOST + "/auth/logout"


export const GET_ALL_POSTS = HOST + "/feed/view_posts"

export const GET_AVAILABLE_DATES = HOST + "/report/get_dates"
export const FETCH_SATELITE_IMAGE = HOST + "/report/get_image"

export const GET_PUBLIC_NOTES = HOST + "/note/get_public_note"