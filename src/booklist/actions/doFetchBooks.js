import axios from 'axios';
import queryString from 'query-string';
import {
  FETCH_BOOKS,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE
} from './actionTypes';
import API_KEY from '../../constants';


let ROOT_URL = "https://www.googleapis.com/books/v1/volumes?";


export function doFetchBooks(term) {
  let q = {
    q: term || 'react',
    key: API_KEY
  }

  q = queryString.stringify(q, {
    arrayFormat: 'index'
  });

  const request = axios({
    method: 'get',
    url: `${ROOT_URL}${q}`,
  });

  return {
    type: FETCH_BOOKS,
    payload: request
  };
}

export function doSuccessFetchBooks(payload) {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload
  };
}

export function doCancelFetchBooks(payload) {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload
  };
}

