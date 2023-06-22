const initialState = {
    countries: []
}

function counteriesApiReducer(state = initialState, action) {

    switch (action.type) {
        case 'GETCOUNTRIES':
            return {...state, countries:[...action.payload]}
        default:
            return {...state}
    }
}

export function selectCountriesApi (store){
    return store.countriesApi
}

export default counteriesApiReducer;