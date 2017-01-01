/**
 * Created by terios on 12/31/16.
 */


import CheckWinner from '../helpers/checkWinner';


function players(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_SCORE':
            return state;
        case 'CHECK_WINNER':
            var winnerId = CheckWinner(action.action);
            if (winnerId) {
                var tmp = Object.assign({}, state);
                tmp['player' + winnerId].score = tmp['player' + 1].score + 1;
                return tmp;
            }
            return state;
        case 'SELECT_SQUARE':
            return {
                // take the current state
                ...state,
                // overwrite this post with a new one
                ['currentPlayer']: !state['currentPlayer']
            };
        default:
            return state;

    }
}
export default players;