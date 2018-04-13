import { combineReducers } from 'redux';

import BooksReducer from './booklist/reducers/index';

const rootReducer = combineReducers({
	BooksReducer
});

export default rootReducer;