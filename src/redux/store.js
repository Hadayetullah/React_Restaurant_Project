import { createStore, applyMiddleware } from 'redux';
//import Reducer from './reducer';   /* For 'export default Reducer' */
import { Reducer } from './reducer'; /* For only 'export', if the 'export' key is with component declaration */
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const myStore = createStore(Reducer, applyMiddleware(logger, thunk));
//console.log(myStore);

export default myStore;