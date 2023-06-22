import { combineReducers } from "redux";
import counteriesApiReducer from "./countriesApiReducer";
import productApiReducer from "./productsApiReducer";
import DataFetchReducer from "./DataFetchReducer";

const reducer = combineReducers({countriesApi:counteriesApiReducer, products:productApiReducer, dataFetch:DataFetchReducer});
export default reducer;