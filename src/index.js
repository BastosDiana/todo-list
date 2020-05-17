import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './state/reducers';

const store = createStore(
    rootReducer,
    {
        auth: {
            pwdHash: '34762834734242487238427634',
            user: {
                name: 'Diana Bastos',
            },
        },
        projects: [
            {
                id: 'home',
                name: 'Home',
                tasks: [
                    { id: '123', finishDate: 1589717637174 /* generated using Date.now() */, description: 'Buy grosseries' },
                    { id: '124', finishDate: null, description: 'Prepare dinner' },
                ]
            },
            {
                id: 'work',
                name: 'Work',
                tasks: [
                    { id: '125', finishDate: null, description: 'Talk to boss' },
                    { id: '126', finishDate: null, description: 'Meeting' },
                    { id: '127', finishDate: null, description: 'Prepare report' },
                ]
            },
        ]
    },
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
