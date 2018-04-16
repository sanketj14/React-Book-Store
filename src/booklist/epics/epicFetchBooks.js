import axios from 'axios';
import 'rxjs/add/operator/catch';
import queryString from 'query-string';
import { 
  doFetchBooks,
  doSuccessFetchBooks,
  doCancelFetchBooks
} from '../actions/doFetchBooks';
import { FETCH_BOOKS } from '../actions/actionTypes';
import { API_KEY, ROOT_URL } from '../../constants';

function epicFetchBooks(action$, store) {
  return action$.ofType(FETCH_BOOKS)
  .map(function(action){
    return action;
  })
  .mergeMap(function(action){
    let q = {
      q: action.term || 'react',
      key: API_KEY
    }
  
    q = queryString.stringify(q, {
      arrayFormat: 'index'
    });
  
    axios.get(`${ROOT_URL}${q}`)
    .then(response => doSuccessFetchBooks(response))
    .catch(error => doCancelFetchBooks(error.xhr))
  })
}

export default epicFetchBooks;