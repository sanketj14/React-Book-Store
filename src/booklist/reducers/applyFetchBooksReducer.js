import {
  FETCH_BOOKS,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  BOOK_SELECTED
} from '../actions/actionTypes'

let initialState = {
  books: [],
  isLoading: false,
  activeBook: {},
  error: null
}

function applyFetchBooksReducer (state = initialState, action) {
  switch(action.type){
    case FETCH_BOOKS : 
      return Object.assign({}, state, {
        books: [],
        isLoading: true,
        error: null
      });

    case BOOK_SELECTED : 
      return Object.assign({}, state, {
        activeBook: action.activeBook,
      });

    case FETCH_BOOKS_SUCCESS : 
      return Object.assign({}, state, {
        books: action.payload.data.items,
        isLoading: false,
        error: null
      });

    case FETCH_BOOKS_FAILURE : 

      return Object.assign({}, state, {
        books: [],
        isLoading: false,
        error: action.payload
      });

    default : 
      return state;
  }
}

export default applyFetchBooksReducer;


