import { React, useState } from 'react';
import { connect } from 'react-redux';
import { selectDataFetch } from '../store/reduces/DataFetchReducer';
import { getData } from '../store/actions';
import './dataFetch.css'


function DataFetchApp(props) {
  const [ApiUrl, setApiUrl] = useState('');
  const collectApiUrl = (e) => {
    setApiUrl(e.target.value)
  }
  return (
    <div className='main-bg'>
      <div className='container'>
        <div className='data-fetch'>
        <h1 className='title'>Data Fetch App</h1>
        <div className='url-input'>
          <input type="text" placeholder='enter api url' onChange={collectApiUrl} />
          <button onClick={() => {
            props.getApiData(ApiUrl)
          }}>submit</button>
        </div>
        </div>
      </div>
      <div className='container-fluid'>
      <p className='data'>
        <div>
          <h4>{props.demoURLs.title}</h4>
          <ul>
            <li>{props.demoURLs.productApi}</li>
            <li>{props.demoURLs.countriesApi}</li>
          </ul>
        </div>
        <h2>url: <span>{ApiUrl}</span></h2>
      <div className='container black-display'>
        {props.data}
        </div>
      </p>
        </div>
    </div>
  )
}

function mapStateToProps(store) {
  return selectDataFetch(store)
}

function mapDispatchToProps(dispatch) {
  return {
    getApiData: (ApiUrl) => {
      console.log(ApiUrl)
      dispatch(getData(ApiUrl))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DataFetchApp)