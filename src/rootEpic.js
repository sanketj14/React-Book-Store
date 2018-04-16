import { combineEpics } from 'redux-observable';
import BookEpics from './booklist/epics/index';

const rootEpic = combineEpics (
  BookEpics
)

export default rootEpic;