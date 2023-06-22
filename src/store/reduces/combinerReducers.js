import { combineReducers } from "redux";
import DataFetchReducer from "./DataFetchReducer";

const reducer = combineReducers({ dataFetch:DataFetchReducer});
export default reducer;