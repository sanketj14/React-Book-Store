import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import createHistory from 'history/createHashHistory';

// import the root reducer
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

const epicMiddleware = createEpicMiddleware(rootEpic);

export const history = createHistory({
})

const store = createStore(
	rootReducer,
	applyMiddleware(epicMiddleware)
);

export default store;