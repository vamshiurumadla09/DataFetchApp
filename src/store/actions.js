import { dataFetch } from './customHooks/useFetch';

export function getData(url){
    return (dispatch)=>{
        const apiData = dataFetch(dispatch, url, 'GETDATA');
        return apiData
    }
}

// https://restcountries.com/v2/all
// https://fakestoreapi.com/products