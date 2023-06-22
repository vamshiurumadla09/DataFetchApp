const initialState = {
    data:'enter url and get data'
}

function DataFetchReducer (state=initialState, action){
    switch (action.type) {
        case 'GETDATA':
            return {...state, data:action.payload}
        default:
            return {...state}
    }
}

export function selectDataFetch(store){
return store.dataFetch
}
export default DataFetchReducer