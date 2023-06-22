export function dataFetch(dispatch, url, type){
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        data = JSON.stringify(data);
        return dispatch({type:type, payload:data})
    })
}

export function useFetch(url, setApiData){
    if(!url){
        return setApiData('there is no url');
    }
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        data = JSON.stringify(data);
        setApiData(data);
        return data
    })
    .catch(()=>{
        setApiData('url not found');
    })
}