import axios from 'axios';
import { dataFetch } from './customHooks/useFetch';


//demo component
export function demo() {
    return {
        type: 'DEMO'
    }
};

//countries api
export function getAllCountries() {
    return (dispatch)=>{
        fetch("https://restcountries.com/v2/all")
        .then((res) => {
          return res.json()
        })
        .then((data) => {
            return dispatch({
                type: 'GETCOUNTRIES',
                payload:data
            })
        })
    }
};

//products api

export function getAllProducts(){
    return (dispatch)=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            return dispatch({type:'GETPRODUCTS', payload:res.data})
        })
        .catch((e)=>{
            console.log(e)
        })
    }
}

//any api data
export function getData(url){
    return (dispatch)=>{
        const apiData = dataFetch(dispatch, url, 'GETDATA');
        return apiData
    }
}