import { createStore } from 'redux'
import createHistory from 'history/createHashHistory'

// import the root reducer
import rootReducer from './rootReducer';

export const history = createHistory({
})

const store = createStore(
	rootReducer
);

export default store;