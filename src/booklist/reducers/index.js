import { combineReducers } from 'redux';
import applyFetchBooksReducer from './applyFetchBooksReducer';

const BooksReducer = combineReducers({
	applyFetchBooksReducer
});

export default BooksReducer;
