/**
 * Created by terios on 12/31/16.
 */

import React from 'react';
import {render} from 'react-dom';


// import react router deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {Provider} from 'react-redux';
import store, {history} from './store';

import App from './components/App';
import GameBoard from './components/GameBoard';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
injectTapEventPlugin();

// import Material ui
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import styles from './styles/app.less'
const router = (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={GameBoard}></IndexRoute>
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>
);

render(router, document.getElementById('root'));
