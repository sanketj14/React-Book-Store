import axios from 'axios';
import {
  FETCH_BOOKS,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE
} from './actionTypes';

export function doFetchBooks(term, atts) {
  console.log('atts====>',atts);
  return {
    type: FETCH_BOOKS,
    term
  };
}

export function doSuccessFetchBooks(payload) {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload
  };
}

export function doCancelFetchBooks(error) {
  return {
    type: FETCH_BOOKS_FAILURE,
    error
  };
}

