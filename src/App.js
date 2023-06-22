import React from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
// import ProductApi from './components/ProductApi';np
// import CountriesApi from './components/CountriesApi';
import DataFetchApp from './components/DataFetchApp';
function App() {
  return (
    <Provider store={store}>
      <DataFetchApp></DataFetchApp>
      {/* <ProductApi></ProductApi>
      <CountriesApi></CountriesApi> */}
    </Provider>
  )
}
export default App