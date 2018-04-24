import {
  FETCH_BOOKS,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE
} from '../actions/actionTypes'

let initialState = {
  books: [],
  isLoading: false,
  error: null
}

function applyFetchBooksReducer (state = initialState, action) {
  console.log('action.type ====>',action.type);
  switch(action.type){
    case FETCH_BOOKS : 
      return Object.assign({}, state, {
        books: [],
        isLoading: true,
        error: null
      });

    case FETCH_BOOKS_SUCCESS : 
      console.log('action.payload.data',action.payload.data);
      return Object.assign({}, state, {
        books: action.payload.data.items,
        isLoading: false,
        error: null
      });

    case FETCH_BOOKS_FAILURE : 

      return Object.assign({}, state, {
        books: [],
        isLoading: false,
        error: action.payload.error
      });

    default : 
      return state;
  }
}

export default applyFetchBooksReducer;


