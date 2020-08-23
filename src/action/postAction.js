import {GET_ALL_CATEGORY,GET_ALL_POST,GET_SORTED_POST,API} from './type';
import axios from 'axios'

export const getAllCategory = ()=> dispatch=>{
    const method = "get-all-category"
    axios.get(API+method)
    .then((res)=>{
        dispatch({
            type:GET_ALL_CATEGORY,
            payload:res.data.message
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}

export const getAllPost = ()=> dispatch=>{
    const method = "get-all-post"
    axios.get(API+method)
    .then((res)=>{
        dispatch({
            type:GET_ALL_POST,
            payload:res.data.message
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}

export const getSortedPost = (bike) => dispatch =>{
    const method = "get-all-post"
    axios.get(API+method)
    .then((res)=>{
        dispatch({
            type:GET_ALL_POST,
            payload:res.data.message
        })
        dispatch({
            type:GET_SORTED_POST,
            payload:bike
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}


