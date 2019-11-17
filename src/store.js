import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducers from './reducers/reducers';

const err = store => next => action =>{
	try {
		next(action);
	} catch(e){
		console.error(e);
	}
}