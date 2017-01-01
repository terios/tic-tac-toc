/**
 * Created by terios on 12/31/16.
 */

import CheckWinner from '../helpers/checkWinner';

function grid(state = [], action) {
    switch (action.type) {
        case 'SELECT_SQUARE':
            const {row,index}= action;
            var tmp = [
                ...state.slice(0, row),
                [...state[row].slice(0, index), action.player, ...state[row].slice(index + 1)]
                , ...state.slice(row + 1)
            ];
            return tmp;
        default:
            return state;

    }
}
export default grid;
