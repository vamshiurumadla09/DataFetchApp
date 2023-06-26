const initialState = {
    data:'',
    demoURLs:{
        title:'Demo ApiUrl',
        productApi:'https://fakestoreapi.com/products',
        countriesApi:'https://restcountries.com/v2/all'
    }
}

function DataFetchReducer (state=initialState, action){
    switch (action.type) {
        case 'GETDATA':
            return {...state, data:action.payload, demoURLs:{ title:'', productApi:'', countriesApi:''}}
        default:
            return {...state}
    }
}

export function selectDataFetch(store){
return store.dataFetch
}
export default DataFetchReducer