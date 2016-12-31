/**
 * Created by terios on 12/31/16.
 */

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actionCreators from '../actions/actionCreators';

import Main from './Main';

function mapStateToProps(state) {
    return {drawer: state.drawer, grid: state.grid, players: state.players}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);

}
const app = connect(mapStateToProps, mapDispatchToProps)(Main);

export default app;