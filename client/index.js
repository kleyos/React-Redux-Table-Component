import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from '../client/components/App';

const app = (
	<Provider store={store}>
		<App />
	</Provider>)


render(app,  document.getElementById('app'));
