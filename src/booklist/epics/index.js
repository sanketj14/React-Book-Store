import { combineEpics } from 'redux-observable';
import epicFetchBooks from './epicFetchBooks';

// Import epics and combine
const BookEpics = combineEpics(
	epicFetchBooks
);

export default BookEpics