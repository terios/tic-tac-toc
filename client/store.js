/**
 * Created by terios on 12/31/16.
 */

import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import grid from './data/grid';
import players from './data/players';

const defaultState = {
    drawer: false,
    players: players,
    grid: grid
};

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const history = syncHistoryWithStore(browserHistory, store);

var currentValue;
function handleChange() {
    var previousValue = currentValue;
    currentValue = JSON.stringify(store.getState().grid);
    if (previousValue !== currentValue) {
        store.dispatch({type: 'CHECK_WINNER', action: store.getState().grid})
    }
}

store.subscribe(handleChange);

export default store;
