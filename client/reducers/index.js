import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import drawer from './drawer';
import grid from './grid';
import players from './players';

const rootReducer = combineReducers({drawer, grid, players: players, routing: routerReducer});

export default rootReducer;
