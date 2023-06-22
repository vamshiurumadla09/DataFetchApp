const initialState = {
    products: []
}

function productApiReducer(state = initialState, action) {
    switch (action.type) {
        case 'GETPRODUCTS':
            return {...state, products:[...action.payload]}
        default:
            return {
                ...state
            }
    }
}

export function selectProductState(store) {
    return store.products
}
export default productApiReducer;