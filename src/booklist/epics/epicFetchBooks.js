import axios from 'axios';
import queryString from 'query-string';
import { 
  doFetchBooks,
  doSuccessFetchBooks,
  doCancelFetchBooks
} from '../actions/doFetchBooks';
import { FETCH_BOOKS } from '../actions/actionTypes';
import { API_KEY, BOOKS_API } from '../../constants';

function epicFetchBooks(action$, store) {
  return action$.ofType(FETCH_BOOKS)
  .mergeMap(action => {
    let q = {
      q: action.term || 'react',
      key: API_KEY
    }
  
    q = queryString.stringify(q, {
      arrayFormat: 'index'
    });
    axios.get(`https://${BOOKS_API}${q}`)
    .then(response => doSuccessFetchBooks(response))
    .catch(error => doCancelFetchBooks(error.xhr))
  })
}

export default epicFetchBooks;