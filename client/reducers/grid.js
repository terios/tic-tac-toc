/**
 * Created by terios on 12/31/16.
 */

function grid(state = [], action) {
    switch (action.type) {
        case 'SELECT_SQUARE':
            const {row,index}= action;
            return [
                ...state.slice(0, row),
                [...state[row].slice(0, index), action.player, ...state[row].slice(index + 1)]
                , ...state.slice(row + 1)
            ];
        default:
            return state;

    }
}
export default grid;
