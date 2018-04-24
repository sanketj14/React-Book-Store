import { book_store_axios_instance } from '../../utils/axios';
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
  .map(action => {
    var q = {
      q: action.term,
      key: API_KEY
    }
    q = queryString.stringify(q, {
      arrayFormat: 'index'
    });
    return Object.assign({}, action, {
      q  
    });
  })
  .mergeMap(action => 
    book_store_axios_instance.get(`${action.q}`)
    .then(response => doSuccessFetchBooks(response))
    .catch(error => doCancelFetchBooks(error.xhr))
  )
}

export default epicFetchBooks;