import axios from 'axios'
import host from '../host'
export const getByEmail = (data) => {
    return {
        type: "GET_BY_EMAIL",
        payload: axios.post(`${host}/user/login/`,data,{
            headers:{
                "authorization":"Allow",
            }
        })
    }
}

export const register = (data) => {
    return {
        type: "REGISTER",
        payload:axios.post(`${host}/user/register`,data,{
            headers:{
                "authorization":"Allow",
            }
        })
    }
}

