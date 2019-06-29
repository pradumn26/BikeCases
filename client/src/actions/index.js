import axios from 'axios';

import {FETCH_USER} from "./types";

export const fetchUser = () => dispatch => {
    axios.get('/auth/fetchUser')
        .then(function (res) {
            dispatch({
                type: FETCH_USER,
                payload: res.data
            })
        })
}