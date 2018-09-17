import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Index';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/reducer.js';

const initialState = {
	currentTab: 'Home',
	pIdAddedCart: 0,
	//productsInCart: [],
	books: [
		{name: 'HP',
			 id: 1,
			 year: 2000,
			 author: '',
			 desc: '',
			 url: "p1"},
		{name: 'HP',
			 id: 1,
			 year: 2000,
			 author: '',
			 desc: '',
			 url: "p1"}
  	]
};


const store = createStore(rootReducer, initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render((
	<Provider store={store}>
		<Index />
	</Provider>
), document.getElementById('root'));
registerServiceWorker();
