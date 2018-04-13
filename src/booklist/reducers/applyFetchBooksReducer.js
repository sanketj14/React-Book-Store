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
      let error = action.payload || { message: action.payload.message };

      return Object.assign({}, state, {
        books: [],
        isLoading: false,
        error
      });

    default : 
      return state;
  }
}

export default applyFetchBooksReducer;


