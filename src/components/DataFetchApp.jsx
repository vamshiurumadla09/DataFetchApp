import { React, useState } from 'react';
import { connect } from 'react-redux';
import { selectDataFetch } from '../store/reduces/DataFetchReducer';
import { getData } from '../store/actions';


function DataFetchApp(props) {
  const [ApiUrl, setApiUrl] = useState('');
  const collectApiUrl = (e) => {
    setApiUrl(e.target.value)
  }
  
  return (
    <div className='betterview'>
      <h1 className='text-center'>DataFetchApp</h1>
      <div className='d-flex justify-content-center align-item-center'>
        <input type="text" placeholder='enter api url' onChange={collectApiUrl} />
        <button onClick={() => {
          props.getApiData(ApiUrl)
        }}>submit</button>
      </div>
      <p>{props.data}</p>
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