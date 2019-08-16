import host from '../host'
import axios from 'axios'

export const getPattern= ()=>{
    return{
        type:'GET_PATTERN',
        payload:axios.get(`${host}/pattern`)
    }
}

export const patchPattern= (data)=>{
    return{
        type:'PATCH_PATTERN',
        payload:axios.patch(`${host}/pattern/${data.idPattern}`,data)
    }
}