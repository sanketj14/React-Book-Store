import axios from 'axios';
import {
  FETCH_BOOKS,
  BOOK_SELECTED,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE
} from './actionTypes';

export function selectedBook(activeBook) {
  console.log('activeBook', activeBook);
  return {
    type: BOOK_SELECTED,
    activeBook
  }
}

export function doFetchBooks(term) {
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

export function doCancelFetchBooks(payload) {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload
  };
}

