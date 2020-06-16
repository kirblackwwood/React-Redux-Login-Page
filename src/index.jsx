import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { App } from './App';
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
